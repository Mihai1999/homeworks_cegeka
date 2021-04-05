"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, provider, stock, price) {
        this.likeability = 0;
        this.id = id;
        this.name = name;
        this.provider = provider;
        this.stock = stock;
        this.price = price;
        console.log(this);
    }
    IncrementLIKE(value) {
        this.likeability += value;
    }
    Buy() {
        this.stock -= 1;
    }
}
exports.default = Product;
//# sourceMappingURL=Product.js.map