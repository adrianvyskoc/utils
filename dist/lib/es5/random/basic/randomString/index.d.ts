/**
 * Returns the random string for the given length.
 * @since 1.0.0
 * @param {number} [length=10] length
 */
export declare function randomString(length?: number, { letters, numbers, specialCharacters }?: {
    letters?: boolean;
    numbers?: boolean;
    specialCharacters?: boolean;
}): string;
