import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductRepository } from './model/product.repository';
import { StaticDataSource } from './model/static.datasource';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import {StoreComponent} from './store/store.component';
import {CheckoutComponent} from './store/checkout.component';
import {CartDetailComponent} from './store/cart-detail.component';
import {RouterModule} from '@angular/router';
import {StoreFirstGuard} from './store-first.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot([
      {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
      {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {path: '**', redirectTo: '/store'}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
