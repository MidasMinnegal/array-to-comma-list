/**
 * Returns a heathen comma list which is designed to be read my humans.
 *
 * @param array - The array that you want to convert
 * @param conjunction - The word that is injected before the last item
 *
 * @returns {string} Example: "One, two and three"
 */
export const heathenCommaList = (array, conjunction= 'and') =>
  [array.slice(0, -1).join(', '), array.slice(-1)[0]].join(array.length < 2 ? '' : ` ${conjunction} `);

/**
 * Returns an Oxford comma list, often used in scientific literature.
 *
 * @param array - The array that you want to convert
 * @param conjunction - The word that is injected before the last item
 *
 * @returns {string} Example: "One, two, and three"
 */
export const oxfordCommaList = (array, conjunction= 'and') =>
  [array.slice(0, -1).join(', '), array.slice(-1)[0]].join(array.length < 2 ? '' : `, ${conjunction} `);
