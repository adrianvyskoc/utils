/**
 * Returns a random longitude and latitude
 * @since 1.0.0
 */
export function coords() {
    return {
        lat: Math.random() * 180 - 90,
        lng: Math.random() * 360 - 180
    };
}