import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiHostAddress:string = 'http://192.168.1.4:9000'

  constructor() { }
}
