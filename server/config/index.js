import dotenv from 'dotenv';

dotenv.config();

export default {
  dataBaseUrl:
    process.env.DATABASE_URL ||
    'mongodb+srv://damir:2d2ae123@cluster0-laynp.mongodb.net/test?retryWrites=true&w=majority',
};
