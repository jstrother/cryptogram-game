import { encryption } from '@/functions/encryption';

const string = 'Seattle Sounders FC';

describe('encryption()', () => {
  it('encrypts the original string', () => {
    expect(string).not.toBe(encryption(string));
  });

  it('has a different encryption each time it is called', () => {
    expect(encryption(string)).not.toBe(encryption(string));
  });
});
