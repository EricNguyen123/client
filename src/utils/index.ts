import api from "./api"
import CryptoJS from 'crypto-js';

export const setAuthToken = (headers: any): void => {
  if (Object.keys(headers).length > 0 && typeof headers === "object") {
    api.defaults.headers.common = headers;
  }
};

export function encrypt(text: string, secretKey: string): string {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

export function decrypt(encryptedText: string, secretKey: string): string | null {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedText) {
      throw new Error('Decryption failed, invalid data or secret key');
    }

    return decryptedText;
  } catch (error) {
    console.error('Error during decryption:', error);
    return null;
  }
}

export function capitalizeFirstLetter(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase();
};
