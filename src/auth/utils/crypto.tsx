import CryptoJS from 'crypto-js';

const privateKey = process.env.REACT_APP_PRIVATE_KEY || '';

export const cipherText = (shallowText: string): string => {
  const encrypted = CryptoJS.AES.encrypt(shallowText, privateKey).toString();
  return encrypted;
};
