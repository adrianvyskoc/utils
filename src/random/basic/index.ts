/**
 * Returns the random string for the given length.
 * @param {number} [length=10] length
 * @returns {string} random string for given length
 * @since 1.0.0
 */
export function randomString(length: number = 10, { letters, numbers, specialCharacters}: {letters?: boolean, numbers?: boolean, specialCharacters?: boolean} = {letters: true, numbers: true, specialCharacters: true}) {
    const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';  
    const NUMBERS = '0123456789';  
    const SPECIAL_CHARACTERS = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

    let characters = '';

    if (letters) {
        characters += LETTERS;
    }

    if (numbers) {
        characters += NUMBERS;
    }

    if (specialCharacters) {
        characters += SPECIAL_CHARACTERS;
    }

    let randomString = '';
    for (let i = 0; i < length; i++) {  
        const rnum = Math.floor(Math.random() * (characters.length));  
        randomString += characters.substring(rnum, rnum+1);  
    }  

    return randomString;
}

/**
 * Returns the random integer.
 * @param {number} [max=MAX_SAFE_INTEGER] max
 * @returns {number} random integer from 0 to max
 * @since 1.0.1
 */
export function randomInteger(max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * max);
}