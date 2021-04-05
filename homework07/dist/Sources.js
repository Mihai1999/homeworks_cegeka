"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class Sources {
    constructor() {
        this.products = new Array();
        this.AddValues();
        console.log(this.products);
    }
    AddValues() {
        var p1 = new Product_1.default(1, "nume", "provider", 32, 1500);
        var p2 = new Product_1.default(1, "nume2", "provider2", 32, 100);
        this.products.push(p1, p2);
    }
    GetProducts() {
        return this.products;
    }
}
exports.default = Sources;
var s = new Sources();
//# sourceMappingURL=Sources.js.map