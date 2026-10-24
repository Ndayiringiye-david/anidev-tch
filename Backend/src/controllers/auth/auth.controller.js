import asyncHandler from '../../utils/asyncHandler.js';
import { authService } from '../../services/index.js';
import ApiResponse from '../../utils/ApiResponse.js';

export const register = asyncHandler(async (req, res) => {
  const { full_name, email, password, phone, country, role } = req.body;

  const data = await authService.register({
    full_name,
    email,
    password,
    phone,
    country,
    role,
  });

  return res.status(201).json(new ApiResponse(201, data, 'User registered successfully'));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const data = await authService.login({ email, password });
  return res.status(200).json(new ApiResponse(200, data, 'Login successful'));
});

export const getMe = asyncHandler(async (req, res) => {
  const user = await authService.getUserById(req.user.id);
  return res.status(200).json(new ApiResponse(200, { user }, 'Profile fetched'));
});

export default { register, login, getMe };
