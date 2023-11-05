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
exports.Order = void 0;
const { OneToMany, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } = require('typeorm');
const Customer_1 = require("./Customer");
const Orderdetail_1 = require("./Orderdetail");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    Column('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Order.prototype, "totalprice", void 0);
__decorate([
    Column({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "createdAt", void 0);
__decorate([
    Column({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    ManyToOne(() => Customer_1.Customer, (customer) => customer.orders),
    JoinColumn({ name: 'customerId' }),
    __metadata("design:type", Customer_1.Customer)
], Order.prototype, "customer", void 0);
__decorate([
    OneToMany(() => Orderdetail_1.Orderdetail, (orderdetail) => orderdetail.order),
    __metadata("design:type", Array)
], Order.prototype, "orderdetails", void 0);
exports.Order = Order = __decorate([
    Entity()
], Order);
//# sourceMappingURL=Order.js.map