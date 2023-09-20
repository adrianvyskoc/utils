"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coords = void 0;
/**
 * Returns a random longitude and latitude
 * @since 1.0.0
 */
function coords() {
    return {
        lat: Math.random() * 180 - 90,
        lng: Math.random() * 360 - 180
    };
}
exports.coords = coords;
