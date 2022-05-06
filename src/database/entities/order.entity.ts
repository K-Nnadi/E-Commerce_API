import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    totalPrice: number;

    @Column()
    lineItems: Product[];

    
    @Column()
    fulfilmentStatus: string;


    @Column()
    trackingURL: string;


    @Column()
    erpKey: string;

    @Column()
    customerName: string;


    @Column()
    shippingAddress: {
        Address1: string;
        Address2: string;
        townCity: string;
        postcode: string;
    };

    //Constraints
    @OneToMany(() => Product, products => products.order)
    products: Product[]


}