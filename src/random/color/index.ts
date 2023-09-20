/**
 * Returns a random hex color
 * @since 1.0.1
 * @returns {string} random hex color
 */
export function randomHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * Returns a random rgb color
 * @since 1.0.1
 * @returns {string} random rgb color
 */
export function randomRgb() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

/**
 * Returns a random rgba color
 * @since 1.0.1
 * @returns {string} random rgba color
 */
export function randomRgba() {
  return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`;
}

/**
 * Returns a random hsl color
 * @since 1.0.1
 * @returns {string} random hsl color
 */
export function randomHsl() {
  return `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`;
}