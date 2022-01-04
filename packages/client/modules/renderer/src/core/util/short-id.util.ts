import shortid from 'shortid';

export const generateShortId = () => {
  return `_${shortid()}`;
};
