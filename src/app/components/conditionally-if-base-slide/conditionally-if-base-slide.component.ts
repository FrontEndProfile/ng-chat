import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionally-if-base-slide',
  templateUrl: './conditionally-if-base-slide.component.html',
  styleUrl: './conditionally-if-base-slide.component.css'
})
export class ConditionallyIfBaseSlideComponent {
  // Arrays to hold slide image URLs
  slides1: string[] = [
    'https://fakeimg.pl/400x400?text=Slide+One+1&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+One+2&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+One+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+One+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+One+5&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+One+6&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+One+7&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+One+8&font=bebas'
  ];

  slides2: string[] = [
    'https://fakeimg.pl/400x400?text=Slide+2&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+2&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+2&font=bebas'
  ];

  slides3: string[] = [
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+3&font=bebas'
  ];

  slides4: string[] = [
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas',
    'https://fakeimg.pl/400x400?text=Slide+4&font=bebas'
  ];

  // Control variables to decide which Swiper to display
  showSlide1 = true;
  showSlide2 = true;
  showSlide3 = true;
  showSlide4 = true;
}
