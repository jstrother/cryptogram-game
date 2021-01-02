function encryption(string) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shuffled = alphabet.split('').sort(() => Math.random() - 0.5);
  const encryptedArray = [];

  for (const letter of string.toUpperCase().split('')) {
    if (letter.match(/[^A-Z]/)) {
      // this is to catch anything that is NOT a letter in the string and keep it in the correct place
      encryptedArray.push(letter);
    } else {
      // otherwise we find the index of letter in alphabet, find the same index in shuffled, and push that new letter to encryptedArray
      encryptedArray.push(shuffled[alphabet.indexOf(letter)]);
    }
  }

  return encryptedArray.join('');
}

module.exports = { encryption };
