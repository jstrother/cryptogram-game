function encryption(string) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shuffled = alphabet.split('').sort(() => Math.random() - 0.5);
  const encryptedArray = [];

  for (const char of string.toUpperCase().split('')) {
    if (char.match(/[^A-Z]/g)) {
      // this is to catch anything that is NOT a letter in the string and keep it in the correct place
      encryptedArray.push(char);
    } else {
      // otherwise we find the index of char in alphabet, find the same index in shuffled, and push that new letter to encryptedArray
      encryptedArray.push(shuffled[alphabet.indexOf(char)]);
    }
  }

  return encryptedArray;
}

module.exports = encryption;
