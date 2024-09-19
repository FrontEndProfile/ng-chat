import { Component } from '@angular/core';

@Component({
  selector: 'app-array-base-slide',
  templateUrl: './array-base-slide.component.html',
  styleUrl: './array-base-slide.component.css'
})
export class ArrayBaseSlideComponent {
  // Arrays to hold slide image URLs
  slidesCollection: string[][] = [
    [
      'https://fakeimg.pl/400x400?text=DUMMY+1&font=bebas',
      'https://fakeimg.pl/400x400?text=DUMMY+2&font=bebas',
      'https://fakeimg.pl/400x400?text=DUMMY+3&font=bebas',
      'https://fakeimg.pl/400x400?text=DUMMY+4&font=bebas',
      'https://fakeimg.pl/400x400?text=DUMMY+5&font=bebas',
      'https://fakeimg.pl/400x400?text=DUMMY+6&font=bebas',
      'https://fakeimg.pl/400x400?text=DUMMY+7&font=bebas',
      'https://fakeimg.pl/400x400?text=DUMMY+8&font=bebas'
    ],
    [
        'https://fakeimg.pl/400x400?text=DUMMY+1&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+2&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+3&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+4&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+5&font=bebas',
    ],
    [
        'https://fakeimg.pl/400x400?text=DUMMY+1&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+2&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+3&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+4&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+5&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+6&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+7&font=bebas',
        'https://fakeimg.pl/400x400?text=DUMMY+8&font=bebas',
    ]
  ];
}
