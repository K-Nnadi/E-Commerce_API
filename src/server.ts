import express, {Request, Response} from "express";
import { createConnection } from "typeorm";
import { OrderController } from "./controller/order.controller";
import { ProductController } from "./controller/product.controller";


class Server {
    private orderController: OrderController;
    private productController: ProductController;
    private app: express.Application;

    constructor(){
        this.app = express(); //init the application;
        this.configuration();
        this.orderController = new OrderController();
        this.productController = new ProductController(); 
        this.routes();
    }
//Configure the Server
    public configuration(){
        this.app.set("port", process.env.PORT || 3000);

    }
//Configure the Routes
    public async routes(){
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            driver: "MySQL",
            password: "rootroot",
            username: "root",
            database: "ecom_api",
            synchronize: true
   
        })



        this.app.use("/ecommerceAPI/orders/", this.orderController.router)
        this.app.use("/ecommerceAPI/products/", this.productController.router)

        this.app.get("/", (req: Request, res :Response) => {
            res.send("Hello Naija!");

        });

    }

    
// Start server
    public start(){
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server is listening ${this.app.get("port")} port.`);
        });
    }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server