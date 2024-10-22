export const heathenCommaList = (array, conjunction= 'and') =>
  [array.slice(0, -1).join(', '), array.slice(-1)[0]].join(array.length < 2 ? '' : ` ${conjunction} `);

export const oxfordCommaList = (array, conjunction= 'and') =>
  [array.slice(0, -1).join(', '), array.slice(-1)[0]].join(array.length < 2 ? '' : `, ${conjunction} `);
