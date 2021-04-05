"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sources_1 = __importDefault(require("./Sources"));
const Favorites_1 = __importDefault(require("./Favorites"));
class Market {
    constructor() {
        this.sources = new Sources_1.default();
        var s = new Sources_1.default();
        this.products = s.GetProducts();
        this.favorites = new Favorites_1.default();
    }
    GetById(id) {
        var product = this.products.filter((p, idx) => {
            p.id = id;
        })[0];
        return product;
    }
    AddToFavorites(id) {
        var product = this.GetById(id);
        this.favorites.Add(product, product.likeability);
    }
    Like(id) {
        var product = this.GetById(id);
        product.IncrementLIKE(1);
    }
    Buy(id) {
        var product = this.GetById(id);
        if (product.stock > 0) {
            product.Buy();
        }
        else {
            console.log("Out of stock");
        }
    }
    Show() {
        this.products.forEach((p, idx) => {
            console.log(p);
        });
    }
}
exports.default = Market;
//# sourceMappingURL=Market.js.map