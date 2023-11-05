import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,OneToMany } from 'typeorm';
// const { Category } = require('./Category'); 
// const { Orderdetail } = require('./Orderdetail');
import Category from  './Category';
import {Orderdetail} from  './Orderdetail';

@Entity()
class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    importprice: number;

    @Column('decimal', { precision: 10, scale: 2 })
    retailprice: number;

    @Column()
    quantity: number;

    @Column({ length: 100 })
    barcode: string;

    @Column({ length: 50 })
    image: string;

    @ManyToOne(() => Category, (category) => category.products) 
    @JoinColumn({ name: 'categoryid' })
    category: Category;
      
    @OneToMany(() => Orderdetail, (orderdetail) => orderdetail.product)
    orderdetails: Orderdetail[]

    
    @Column({ length: 50 })
    createdAt: string;
}
// module.exports = Product
export default Product ;

