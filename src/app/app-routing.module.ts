import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BrandsListComponent } from './components/brands/brands-list.component';
import { CategoriesListComponent } from './components/categories/categories-list.component';
import { ProductsListComponent } from './components/products/products-list.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { HomeComponent } from './components/home/home.component';
import { BannersComponent } from './components/banners/banners.component';




const app_routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'brands', component: BrandsListComponent },
    { path: 'categories', component: CategoriesListComponent },
    { path: 'products', component: ProductsListComponent },
    { path: 'banners', component: BannersComponent },
    { path: '**', component: ErrorsComponent }


];


@NgModule({

imports: [
    RouterModule.forRoot  ( app_routes )   
],
exports:[
    RouterModule

]

})

export class AppRoutingModule { }