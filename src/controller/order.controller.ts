import { Request, Response, Router } from "express";
import { Order } from "../database/entities/order.entity";
import { OrderService } from "../services/order.service";

export class OrderController {
    public router: Router;
    private orderService: OrderService;

  constructor(){
    this.orderService = new OrderService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const orders = await this.orderService.index();
    res.send(orders).json();
  } 

  public create = async (req: Request, res: Response) => {
    const order = req['body'] as Order;
    const newOrder = await this.orderService.create(order);
    res.send(newOrder);
  }

  public update = async (req: Request, res: Response) => {
    const order = req['body'] as Order;
    const id =  req['params']['id'];
    
    res.send(this.orderService.update(order, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.orderService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}