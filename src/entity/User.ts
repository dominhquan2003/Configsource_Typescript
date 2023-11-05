import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: true })
    email: string;

    @Column({ length: 10, nullable: true })
    address: string;

    @Column({ length: 50, nullable: true })
    username: string;

    @Column({ length: 100, nullable: true })
    password: string;

    @Column({ type: 'int', nullable: true })
    gender: number;

    @Column({ length: 20, nullable: true })
    role: string;

    @Column({ length: 50, nullable: true })
    createdAt: string;

    @Column({ type: 'int', nullable: true })
    status: number;
}
export default User
