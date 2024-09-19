import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSlideComponent } from './components/products-slide/products-slide.component';
import { ArrayBaseSlideComponent } from './components/array-base-slide/array-base-slide.component';
import { ConditionallyIfBaseSlideComponent } from './components/conditionally-if-base-slide/conditionally-if-base-slide.component';
import { ApiBaseSlideComponent } from './components/api-base-slide/api-base-slide.component';

const routes: Routes = [
    { path: '', component: ProductsSlideComponent },
    { path: 'array', component: ArrayBaseSlideComponent },
    { path: 'condition', component: ConditionallyIfBaseSlideComponent },
    { path: 'api', component: ApiBaseSlideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
