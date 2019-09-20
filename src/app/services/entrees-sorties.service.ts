import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Produit } from '../models/produit';
import { Sortie } from '../models/sortie';
import { Entree } from '../models/entree';

@Injectable({
  providedIn: 'root'
})
export class EntreesSortiesService {

  private headers:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient, private config_service:ConfigService) { }

  public getProduits() {
    return this.http.get<Produit>(this.config_service.apiHostAddress+"/produit");
  }

  public saveSortie(formValue:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.config_service.apiHostAddress+"/sortie",
    {
      produit: {idProduit: parseInt(formValue.produit, 10)},
      dateSortie: this.constructDate(),
      qteSortie: formValue.qteSortie,
      raisonSortie: formValue.raisonSortie
    },
    {headers});
  }

  private constructDate():string {
    let today:Date = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let todayDate:string = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+seconds;
    return todayDate;
  }

  public getSorties() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Sortie[]>(this.config_service.apiHostAddress+'/sortie', {headers})
  }

  public getEntrees() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Entree[]>(this.config_service.apiHostAddress+'/entree', {headers})
  }
}
