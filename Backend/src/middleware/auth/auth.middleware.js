import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/app.js';
import { User } from '../../models/index.js';
import ApiError from '../../utils/ApiError.js';
import asyncHandler from '../../utils/asyncHandler.js';

/**
 * Protect routes — verifies Bearer token and attaches req.user
 */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) throw new ApiError(401, 'Not authorised, no token provided');

  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) throw new ApiError(401, 'User belonging to this token no longer exists');

  req.user = user;
  next();
});

/**
 * Role-based access control
 * @param  {...string} roles - Allowed roles
 */
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, 'You do not have permission to perform this action'));
    }
    next();
  };
};

export default { protect, restrictTo };
