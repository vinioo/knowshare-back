import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://semana:semana@cluster0-miskq.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      }
    );
  }
}

export default new Database();
