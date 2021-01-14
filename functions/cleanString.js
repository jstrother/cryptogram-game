function cleanString(string) {
  return string.replace(/[\W]/g, '').toUpperCase().split('').sort().join('');
}

module.exports = { cleanString };
