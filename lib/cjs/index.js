"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dlv(obj, key, fallback, p = 0) {
    const accessor = typeof key === "string" ? key.split(".") : key;
    while (obj && p < accessor.length) {
        obj = obj[accessor[p++]];
    }
    return (obj === undefined || p < accessor.length) ? fallback : obj;
}
exports.default = dlv;
