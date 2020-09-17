import { Injectable } from '@angular/core';
import { Cardview } from './models/Cardview';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  card: Cardview;
  constructor() { }
}
