import { Request, Response, Router } from "express";
import { Product } from "../database/entities/product.entity";
import { ProductService } from "../services/product.service";

export class ProductController {
    public router: Router;
    private productService: ProductService;

  constructor(){
    this.productService = new ProductService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const products = await this.productService.index();
    res.send(products).json();
  } 

  public create = async (req: Request, res: Response) => {
    const product = req['body'] as Product;
    const newProduct = await this.productService.create(product);
    res.send(newProduct);
  }

  public update = async (req: Request, res: Response) => {
    const product = req['body'] as Product;
    const id =  req['params']['id'];
    
    res.send(this.productService.update(product, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.productService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}