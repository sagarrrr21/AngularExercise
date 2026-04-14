import { Routes } from '@angular/router';
import { ProductComponent } from './product-component/product-component';
import { HomeComponent } from './home-component/home-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { ProductIdComponent } from './product-id-component/product-id-component';
import { ReactiveFormComponent } from './reactive-form-component/reactive-form-component';
import { ContactComponent } from './contact-component/contact-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductIdComponent },
  { path: 'forms', component: ReactiveFormComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
