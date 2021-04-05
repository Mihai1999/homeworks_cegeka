"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Favorites {
    constructor() {
        this.list = new Array();
        this.list = new Array();
    }
    Add(p, discount = 0) {
        p.price -= p.price * discount;
        this.list.push(p);
    }
    Show() {
        this.list.forEach((p) => {
            console.log(p);
        });
    }
}
exports.default = Favorites;
//# sourceMappingURL=Favorites.js.map