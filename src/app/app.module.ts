import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductRepository } from './model/product.repository';
import { StaticDataSource } from './model/static.datasource';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [ProductRepository, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
