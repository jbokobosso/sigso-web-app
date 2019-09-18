import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApproService {

  constructor(private http: HttpClient, private config_service: ConfigService) { }

  // Création d'une nouvelle catégorie
  saveCategorie(formValue: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.config_service.apiHostAddress+'/catProduit', formValue, {headers});
  }

  // Chargement des catégories existantes dans la base 
  loadCategories() {
    return this.http.get<any>(this.config_service.apiHostAddress+'/catProduit');
  }

  // Chargement des informations d'une catégorie sélectionnée afin d'être modifiée
  loadCategoryById(id) {
    return this.http.get<any>(this.config_service.apiHostAddress+'/catProduit/'+id);
  }

  // Mettre à jour une catégorie
  updateCategory(id, formValue:any) {
    console.log(formValue);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.config_service.apiHostAddress+'/catProduit/'+id, formValue, {headers});
  }

  // Création / sauvegarde d'un nouvel article
  saveArticle(formValue:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.config_service.apiHostAddress+'/produit',
    {
      "designation": formValue.designation,
      "estPerissable": formValue.estPerissable,
      "prixU": formValue.prixu,
      "catProduit": {"idCatProd": formValue.catProduit}
    }, 
    {headers})
  }

  // Charger les produits qui existent dans la base
  loadProducts() {
    return this.http.get<any>(this.config_service.apiHostAddress+"/produit");
  }

  // Charger un prodiut par son id
  loadProductById(id) {
    return this.http.get<any>(this.config_service.apiHostAddress+"/produit/"+id)
  }

  // Mettre à jour une catégorie
  updateProduit(id, formValue:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.config_service.apiHostAddress+"/produit/"+id,
    {
      idProduit: formValue.idProduit,
      designation: formValue.designation,
      estPerissable: formValue.estPerissable,
      prixU: formValue.prixU,
      catProduit: {idCatProd: formValue.catProduit}
    }, 
    {headers})
  }

  // Charger les fournisseurs depuis la base de données
  loadFournisseurs() {
    return this.http.get<any>(this.config_service.apiHostAddress+"/fournisseur");
  }

  // Sauvegarder un enregistrement d'approvisionnement - un achat
  saveAchat(formValue:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.config_service.apiHostAddress+"/achat",
    {
      "qteAchat": formValue.qteAchat,
      "dateAchat": formValue.dateAchat,
      "fournisseur": {"idFournisseur": formValue.idFournisseur},
      "utilisateurs": {"idUtilisateur": localStorage.getItem("connectedUserId")},
      "produit": {"idProduit": formValue.idProduit}
    },
    {headers})
  }
}
