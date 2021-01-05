// Generate random 16 digits strings
export const generateRandomString = () => {
  const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const N = 16;
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map(n => S[n % S.length]).join('')

  return fileName
}