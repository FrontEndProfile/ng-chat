import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-base-slide',
  templateUrl: './api-base-slide.component.html',
  styleUrl: './api-base-slide.component.css'
})
export class ApiBaseSlideComponent {
    cards: any[] = [];

    constructor(private http: HttpClient) {
      this.fetchCards().subscribe(data => {
        this.cards = data;
      });
    }
  
    fetchCards(): Observable<any[]> {
      return this.http.get<any[]>('https://66ebfee72b6cf2b89c5cc703.mockapi.io/api/v1/company');
    }
}
