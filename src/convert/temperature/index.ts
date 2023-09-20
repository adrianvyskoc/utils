/**
 * Convert temperature from celsius to fahrenheit
 * @param celsius {number} temperature in celsius
 * @returns temperature in fahrenheit
 * @since 1.0.1
 * @example celsiusToFahrenheit(0) // 32
 * @example celsiusToFahrenheit(100) // 212
 * @example celsiusToFahrenheit(37) // 98.6
 * @example celsiusToFahrenheit(30) // 86
 */
export const celsiusToFahrenheit = (celsius: number) => celsius * 9/5 + 32;

/**
 * Convert temperature from fahrenheit to celsius
 * @param fahrenheit {number} temperature in fahrenheit
 * @returns temperature in celsius
 * @since 1.0.1
 * @example fahrenheitToCelsius(32) // 0
 * @example fahrenheitToCelsius(212) // 100
 * @example fahrenheitToCelsius(98.6) // 37
 */
export const fahrenheitToCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5/9;

/**
 * Convert temperature from fahrenheit to kelvin
 * @param fahrenheit {number} temperature in fahrenheit
 * @returns temperature in kelvin
 * @since 1.0.1
 * @example fahrenheitToKelvin(32) // 273.15
 * @example fahrenheitToKelvin(212) // 373.15
 * @example fahrenheitToKelvin(98.6) // 310.15
 */
export const celsiusToKelvin = (celsius: number) => celsius + 273.15;

/**
 * Convert temperature from kelvin to fahrenheit
 * @param kelvin {number} temperature in kelvin
 * @returns temperature in fahrenheit
 * @since 1.0.1
 * @example kelvinToFahrenheit(273.15) // 32
 * @example kelvinToFahrenheit(373.15) // 212
 */
export const kelvinToCelsius = (kelvin: number) => kelvin - 273.15;

/**
 * Convert temperature from kelvin to fahrenheit
 * @param kelvin {number} temperature in kelvin
 * @returns temperature in fahrenheit
 * @since 1.0.1
 * @example kelvinToFahrenheit(273.15) // 32
 * @example kelvinToFahrenheit(373.15) // 212
 */
export const fahrenheitToKelvin = (fahrenheit: number) => celsiusToKelvin(fahrenheitToCelsius(fahrenheit));

/**
 * Convert temperature from kelvin to fahrenheit
 * @param kelvin {number} temperature in kelvin
 * @returns temperature in fahrenheit
 * @since 1.0.1
 * @example kelvinToFahrenheit(273.15) // 32
 * @example kelvinToFahrenheit(373.15) // 212
 * @example kelvinToFahrenheit(310.15) // 98.6
 */
export const kelvinToFahrenheit = (kelvin: number) => celsiusToFahrenheit(kelvinToCelsius(kelvin));