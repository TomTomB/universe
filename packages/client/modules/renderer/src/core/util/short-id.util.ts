import shortid from 'shortid';

export const generateShortId = (prefix?: string) => {
  return `${prefix ?? ''}_${shortid()}`;
};
