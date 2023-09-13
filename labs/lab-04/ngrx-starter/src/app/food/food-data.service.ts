import { HttpClient } from "@angular/common/http";
import { FoodItem } from "./food.model";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { environment } from "src/environments/environment.development";
import { map, tap } from "rxjs";

@Injectable()
export class FoodsDataService extends DefaultDataService<FoodItem> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Food', http, httpUrlGenerator);
  }

  // Because we have overwritten all CRUD methods, we do not need to proide a custom HttpUrlGenerator
  // The current overwrites are just for demonstration purposes that represent the default behaviour

  override getAll() {
    return this.http.get<FoodItem[]>(`${environment.api}/food`).pipe(
        tap($ => console.log('test')),
      map((data: FoodItem[]) => {
        if (!data) {
          return [];
        }
        return (data as FoodItem[]).map((sk) => {
          return { ...sk };
        });
      })
    );
  }
}
