import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiHostAddress:string = 'http://localhost:9000'

  constructor() { }
}
