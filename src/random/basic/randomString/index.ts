/**
 * Returns the random string for the given length.
 * @since 1.0.0
 * @param {number} [length=10] length
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