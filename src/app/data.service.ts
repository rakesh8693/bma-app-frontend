import { Injectable } from '@angular/core';
import { Cardview } from './models/cardview';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  card: Cardview;
  constructor() { }
}
