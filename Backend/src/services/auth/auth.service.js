import jwt from 'jsonwebtoken';
import { User } from '../../models/index.js';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../../config/app.js';
import ApiError from '../../utils/ApiError.js';

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const register = async ({ full_name, email, password, role = 'student', phone = '', country = '' }) => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new ApiError(409, 'Email already in use');
  }

  const user = await User.create({
    full_name,
    email,
    password,
    role,
    phone,
    country,
  });

  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      country: user.country,
      status: user.status,
    },
    token,
  };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
      status: user.status,
    },
    token,
  };
};

export const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new ApiError(404, 'User not found');
  return user;
};

export default { register, login, getUserById, generateToken };
