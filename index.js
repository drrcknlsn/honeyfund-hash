/**
 * Hashes the provided string.
 *
 * @param {string} s An arbitrary string to be hashed
 * @return {number} The hashed string
 */

export function hash(s) {
  const letters = 'acdfgilmnoprstuw';
  let out = 7;

  for (let i = 0; i < s.length; i++) {
    out = out * 23 + letters.indexOf(s[i]);
  }

  return out;
}

/**
 * Unhashes the provided hash.
 *
 * @param {number} hash A hash from the {@link hash} function
 * @return {string} The unhashed string
 */
export function unhash(hash) {
  const letters = 'acdfgilmnoprstuw';
  let s = '';

  if (isNaN(parseInt(hash, 10))) {
    throw 'Invalid hash';
  }

  while (hash !== 7) {
    if (hash < 7) {
      throw 'Invalid hash';
    }

    let index = hash % 23;

    if (letters[index] === undefined) {
      throw 'Invalid hash';
    }

    s += letters[index];
    hash = (hash - index) / 23;
  }

  return s.split('').reverse().join('');
}
