import { Injectable } from '@angular/core';
import { Card } from './models/card';
import { Cardview } from './models/Cardview';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  card:Cardview;
  constructor() { }
}
