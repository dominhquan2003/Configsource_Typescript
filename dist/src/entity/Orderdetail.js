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
exports.Orderdetail = void 0;
const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } = require('typeorm');
const Order_1 = require("./Order");
const Product_1 = require("./Product");
let Orderdetail = class Orderdetail {
};
exports.Orderdetail = Orderdetail;
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Orderdetail.prototype, "id", void 0);
__decorate([
    ManyToOne(() => Order_1.Order, (order) => order.orderdetails),
    JoinColumn({ name: 'order_id' }),
    __metadata("design:type", Order_1.Order)
], Orderdetail.prototype, "order", void 0);
__decorate([
    ManyToOne(() => Product_1.Product, (product) => product.orderdetails),
    JoinColumn({ name: 'productid' }),
    __metadata("design:type", Product_1.Product)
], Orderdetail.prototype, "product", void 0);
__decorate([
    Column({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Orderdetail.prototype, "quantity", void 0);
__decorate([
    Column('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Orderdetail.prototype, "price", void 0);
exports.Orderdetail = Orderdetail = __decorate([
    Entity()
], Orderdetail);
//# sourceMappingURL=Orderdetail.js.map