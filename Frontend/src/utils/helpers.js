/**
 * Format a date string to a human-readable format.
 * @param {string|Date} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export const formatDate = (date, options = { year: 'numeric', month: 'short', day: 'numeric' }) => {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

/**
 * Truncate a string to a max length with ellipsis.
 * @param {string} str
 * @param {number} max
 * @returns {string}
 */
export const truncate = (str, max = 80) =>
  str.length > max ? `${str.slice(0, max)}…` : str;

/**
 * Capitalise the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
export const capitalise = (str = '') =>
  str.charAt(0).toUpperCase() + str.slice(1);
