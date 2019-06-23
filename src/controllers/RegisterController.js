const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('./validation');

module.exports = {
    async newUser(req, res) {
        // Validate data before send
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // Check if user already exists
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).send('Email already exists');

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        try {
            const savedUser = await user.save();
            res.send({ user: user._id });
        } catch (err) {
            res.status(400).send(err);
        }
    }
};
