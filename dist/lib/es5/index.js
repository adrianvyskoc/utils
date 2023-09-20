"use strict";
// RANDOM
Object.defineProperty(exports, "__esModule", { value: true });
exports.coords = exports.randomString = void 0;
// - BASIC
var randomString_1 = require("./random/basic/randomString");
Object.defineProperty(exports, "randomString", { enumerable: true, get: function () { return randomString_1.randomString; } });
// - GEO
var coords_1 = require("./random/geo/coords");
Object.defineProperty(exports, "coords", { enumerable: true, get: function () { return coords_1.coords; } });
