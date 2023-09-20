/**
 * Converts hex color to rgb
 * @param r {number} red
 * @param g {number} green
 * @param b {number} blue
 * @returns color in hex format
 * @since 1.0.1
 */
export function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * Converts rgb color to hex
 * @param hex {string} hex color
 * @returns color in rgb format
 * @since 1.0.1
 * @example hexToRgb('#000000') // { r: 0, g: 0, b: 0 }
 * @example hexToRgb('#ffffff') // { r: 255, g: 255, b: 255 }
 * @example hexToRgb('#ff0000') // { r: 255, g: 0, b: 0 }
 */
export function hexToRgb(hex: string) {
  let bigint = parseInt(hex.replace('#', ''), 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  return { r, g, b }
}