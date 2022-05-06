import { getConnection } from 'typeorm';
import { Order } from '../database/entities/order.entity';
import { OrderRepository } from '../repository/order.repository';

export class OrderService {
  private orderRepository: OrderRepository;

  constructor(){
    this.orderRepository = getConnection("ecom_api").getCustomRepository(OrderRepository);
  }

  public index = async () => {
    const orders = await this.orderRepository.find()
    return orders;
  } 

  public create = async (order: Order) => {
    const newOrder = await this.orderRepository.save(order);
    return newOrder;
  } 

  public update =  async(order: Order, id: number) => {
    const updatedOrder = await this.orderRepository.update(id, order);
    return updatedOrder;
  } 

  public delete = async (id: number) => {
    const deletedOrder = await this.orderRepository.delete(id);
    return deletedOrder;
  } 
}