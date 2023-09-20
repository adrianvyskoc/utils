/**
 * Returns the random string for the given length.
 * @since 1.0.0
 * @param {number} [length=10] length
 */
export function randomString(length, _a) {
    if (length === void 0) { length = 10; }
    var _b = _a === void 0 ? { letters: true, numbers: true, specialCharacters: true } : _a, letters = _b.letters, numbers = _b.numbers, specialCharacters = _b.specialCharacters;
    var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var NUMBERS = '0123456789';
    var SPECIAL_CHARACTERS = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    var characters = '';
    if (letters) {
        characters += LETTERS;
    }
    if (numbers) {
        characters += NUMBERS;
    }
    if (specialCharacters) {
        characters += SPECIAL_CHARACTERS;
    }
    var randomString = '';
    for (var i = 0; i < length; i++) {
        var rnum = Math.floor(Math.random() * (characters.length));
        randomString += characters.substring(rnum, rnum + 1);
    }
    return randomString;
}
