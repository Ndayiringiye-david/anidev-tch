/**
 * Simple structured logger utility.
 * In production, swap this with Winston or Pino.
 */
const logger = {
  info: (...args) => console.log('[INFO]', new Date().toISOString(), ...args),
  warn: (...args) => console.warn('[WARN]', new Date().toISOString(), ...args),
  error: (...args) => console.error('[ERROR]', new Date().toISOString(), ...args),
  debug: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug('[DEBUG]', new Date().toISOString(), ...args);
    }
  },
};

export default logger;
