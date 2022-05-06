import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    
    @Column()
    quantity: number;

    //Constraints
    @ManyToOne(() => Order)
    order: Order

}