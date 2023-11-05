import { OneToMany,Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import  Customer  from './Customer';
import  Orderdetail  from './Orderdetail';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    totalprice: number;

    @Column({ length: 50, nullable: true })
    createdAt: string;

    @Column({ type: 'int', nullable: true })
    status: number;

    @ManyToOne(() => Customer,(customer) => customer.orders )
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @OneToMany(() => Orderdetail, (orderdetail) => orderdetail.order)
    orderdetails: Orderdetail[]


}
