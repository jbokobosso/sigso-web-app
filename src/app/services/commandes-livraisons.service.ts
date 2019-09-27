import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

export interface Client {
  idClient: number;
  nom: string;
  prenom: string;
  email: string;
  adresseLivraison: string;
  telephone: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommandesLivraisonsService {

  constructor(private http:HttpClient, private config_service:ConfigService) { }

  loadClients() {
    return this.http.get<Client>(this.config_service.apiHostAddress+"/client");
  }

  saveClient(formValue) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.config_service.apiHostAddress+"/client",
    {
      nom: formValue.nom,
      prenom: formValue.prenom,
      email: formValue.email,
      adresseLivraison: formValue.adresse,
      telephone: formValue.telephone
    }, {headers})
  }
}
