"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeneradorDeTokens {
    static crearToken() {
        return Math.random()
            .toString(11)
            .substring(7);
    }
}
exports.GeneradorDeTokens = GeneradorDeTokens;
//# sourceMappingURL=GeneradorDeTokens.js.map