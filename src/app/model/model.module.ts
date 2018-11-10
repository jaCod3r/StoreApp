import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Cart } from './cart.model';
import {HttpClientModule} from '@angular/common/http';
import {RestDataSource} from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule { }
