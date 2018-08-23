import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes:
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CategoriesListComponent } from './components/categories/categories-list.component';
import { BrandsListComponent } from './components/brands/brands-list.component';
import { ProductsListComponent } from './components/products/products-list.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { HomeComponent } from './components/home/home.component';
import { BannersComponent } from './components/banners/banners.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesListComponent,
    BrandsListComponent,
    ProductsListComponent,
    ErrorsComponent,
    HomeComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
