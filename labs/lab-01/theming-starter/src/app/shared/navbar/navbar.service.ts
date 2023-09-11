import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavItem } from './nav-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  http = inject(HttpClient);

  constructor() { }

  getTopItems() {
    return this.http.get<NavItem[]>(`${environment.api}/top-links`); 
  }
}
