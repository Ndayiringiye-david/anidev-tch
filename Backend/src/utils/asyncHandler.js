/**
 * Wraps async route handlers to eliminate try/catch boilerplate.
 * Forwards any errors to Express's next() error handler.
 *
 * @param {Function} fn - Async controller function
 * @returns {Function} Express middleware
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
