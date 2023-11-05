import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,OneToOne } from 'typeorm' ;
import { Order } from './Order';
import  Product  from './Product';

@Entity()
export class Orderdetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Order,(order)=> order.orderdetails)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Product,(product)=> product.orderdetails)
    @JoinColumn({ name: 'productid' })
    product: Product;

    @Column({ type: 'int', nullable: true })
    quantity: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    price: number;

    
}
export default Orderdetail
