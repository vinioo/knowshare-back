import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.find(User);

    return res.status(200).json(users);
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  }
}

export default new UserController();
