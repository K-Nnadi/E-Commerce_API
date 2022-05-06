import { getConnection } from 'typeorm';
import { Product } from '../database/entities/product.entity';
import { ProductRepository } from '../repository/product.repository';

export class ProductService {
  private productRepository: ProductRepository;

  constructor(){
    this.productRepository = getConnection("ecom_api").getCustomRepository(ProductRepository);
  }

  public index = async () => {
    const products = await this.productRepository.find()
    return products;
  } 

  public create = async (product: Product) => {
    const newProduct = await this.productRepository.save(product);
    return newProduct;
  } 

  public update =  async(product: Product, id: number) => {
    const updatedProduct = await this.productRepository.update(id, product);
    return updatedProduct;
  } 

  public delete = async (id: number) => {
    const deletedProduct = await this.productRepository.delete(id);
    return deletedProduct;
  } 
}