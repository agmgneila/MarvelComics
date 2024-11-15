import md5 from 'md5';

export function getHash(ts, privateKey, publicKey) {
  return md5(ts + privateKey + publicKey);
}