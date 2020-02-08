import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(){
    return["test 1", "test 2", "test 3"];
  }
}
