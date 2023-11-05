import { Order } from "./Order";

import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';

@Entity()
class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 20 })
    phone: string;

    @Column({ length: 50 })
    address: string;

    @OneToMany(() => Order, (order) => order.customer)
    orders: Order[]
}
export default Customer ;
