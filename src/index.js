const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect(
    'mongodb+srv://semana:semana@cluster0-miskq.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    req.io = io;
    
    next();
});

app.use(require('./routes'));

server.listen(process.env.PORT);
 