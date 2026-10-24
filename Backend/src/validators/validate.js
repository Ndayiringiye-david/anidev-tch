import { validationResult } from 'express-validator';
import ApiError from '../utils/ApiError.js';

/**
 * Run after express-validator chains.
 * If there are errors, throw a 422 ApiError with all messages joined.
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map((e) => e.msg).join(', ');
    return next(new ApiError(422, messages));
  }
  next();
};

export default validate;
export { validate };
