import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsSlideComponent } from './components/products-slide/products-slide.component';
import { ArrayBaseSlideComponent } from './components/array-base-slide/array-base-slide.component';
import { ConditionallyIfBaseSlideComponent } from './components/conditionally-if-base-slide/conditionally-if-base-slide.component';

import { register } from 'swiper/element/bundle';
import { ApiBaseSlideComponent } from './components/api-base-slide/api-base-slide.component';
import { provideHttpClient } from '@angular/common/http';
register();
@NgModule({
  declarations: [
    AppComponent,
    ProductsSlideComponent,
    ArrayBaseSlideComponent,
    ConditionallyIfBaseSlideComponent,
    ApiBaseSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
