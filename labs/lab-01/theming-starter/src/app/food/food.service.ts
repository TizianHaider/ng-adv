import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private url = `${environment.api}/food`;

  constructor(private httpClient: HttpClient) {}

  getFood() {
      return this.httpClient.get<FoodItem[]>(this.url);
  }

  addFood(food: FoodItem) {
      return this.httpClient.post<FoodItem>(this.url, food);
  }

  updateFood(food: FoodItem) {
      return this.httpClient.put<FoodItem>(`${this.url}/${food.id}`, food);
  }

  deleteFood(id: number) {
      return this.httpClient.delete<FoodItem>(`${this.url}/${id}`);
  }
}
