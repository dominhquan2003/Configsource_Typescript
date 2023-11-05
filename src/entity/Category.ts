import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';
import  Product  from "./Product";
// const Product = require('/products')
@Entity()
class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50, nullable: true })
    image: string;

    @Column({ length: 20, nullable: true })
    code: string;

    @OneToMany(() => Product, (product: { category: any; }) => product.category)
    products: Product[]
}
export default  Category


