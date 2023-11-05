"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } = require('typeorm');
// const { Category } = require('./Category'); 
// const { Orderdetail } = require('./Orderdetail');
const Category_1 = require("./Category");
const Orderdetail_1 = require("./Orderdetail");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    Column({ length: 50 }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    Column('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Product.prototype, "importprice", void 0);
__decorate([
    Column('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Product.prototype, "retailprice", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    Column({ length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "barcode", void 0);
__decorate([
    Column({ length: 50 }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    ManyToOne(() => Category_1.Category, (category) => category.products),
    JoinColumn({ name: 'categoryid' }),
    __metadata("design:type", Category_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    OneToMany(() => Orderdetail_1.Orderdetail, (orderdetail) => orderdetail.product),
    __metadata("design:type", Array)
], Product.prototype, "orderdetails", void 0);
__decorate([
    Column({ length: 50 }),
    __metadata("design:type", String)
], Product.prototype, "createdAt", void 0);
exports.Product = Product = __decorate([
    Entity()
], Product);
// module.exports = Product
//# sourceMappingURL=Product.js.map