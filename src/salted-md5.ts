import CryptoJS from 'crypto-js';

const defaultSuffix = '@Olares2025';

export function saltedMD5(password: string, suffix = defaultSuffix) {
  const saltedPassword = password + suffix;
  const hashedPassword = CryptoJS.MD5(saltedPassword).toString();
  return hashedPassword;
}

export function verifyMd5(
  password: string,
  storedHash: string,
  suffix = defaultSuffix
) {
  const hashedPassword = saltedMD5(password, suffix);
  return hashedPassword === storedHash;
}
