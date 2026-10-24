export const PORT = Number(process.env.PORT) || 5000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
export const MONGO_URI = process.env.MONGO_URI || '';
export const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret_change_in_production';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
export const BCRYPT_SALT_ROUNDS = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 12;

export default {
  PORT,
  NODE_ENV,
  CLIENT_URL,
  MONGO_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  BCRYPT_SALT_ROUNDS,
};
