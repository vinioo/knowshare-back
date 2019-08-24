/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.clear();
  console.log(`Server running on ${port}`);
});
