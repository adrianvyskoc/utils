/**
 * Returns a random longitude and latitude
 */
export function coords() {
    return {
        lat: Math.random() * 180 - 90,
        lng: Math.random() * 360 - 180
    };
}