import { Component, OnInit } from '@angular/core';
import { ToastMessageService } from '../../../services/toast-message.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Produit } from '../../../models/produit';
import { EntreesSortiesService } from '../../../services/entrees-sorties.service';
import { Sortie } from '../../../models/sortie';

@Component({
  selector: 'app-declarer-sortie',
  templateUrl: './declarer-sortie.component.html',
  styleUrls: ['./declarer-sortie.component.scss']
})
export class DeclarerSortieComponent implements OnInit {

  private saveSortieSubscription: Subscription;
  private produits: Observable<Produit>;
  private produit: FormControl;
  private qteSortie: FormControl;
  private raisonSortie: FormControl;
  private declarerSortieForm: FormGroup;

  constructor(private toast_service:ToastMessageService, private router:Router, private entreesSorties_service: EntreesSortiesService) { }

  ngOnInit() {
    this.initForm();
    this.loadProduits();
  }

  initForm() {
    this.produit = new FormControl("", Validators.required);
    this.qteSortie = new FormControl("", Validators.required);
    this.raisonSortie = new FormControl("", Validators.required);
    this.declarerSortieForm = new FormGroup({
      produit: this.produit,
      qteSortie: this.qteSortie,
      raisonSortie: this.raisonSortie
    });
  }

  loadProduits() {
    this.produits = this.entreesSorties_service.getProduits();
    // this.produits.subscribe((data)=>console.log(data));
    // console.log(new Date().toLocaleString());
  }

  onSubmit() {
    if (this.declarerSortieForm.valid) {
      this.saveSortieSubscription = this.entreesSorties_service.saveSortie(this.declarerSortieForm.value).subscribe(
        () => {},
        (errorMessage) => {
          this.toast_service.showToastError("Erreur de sauvegarde, reéssayez", 5000);
          console.log(errorMessage);
        },
        () => {
          this.toast_service.showToastSuccess("Sortie déclarée et sauvegardée", 5000);
          this.saveSortieSubscription.unsubscribe();
          this.declarerSortieForm.reset();
        }
      );
    } else this.toast_service.showWarnningMessage("Veuillez remplir tous les champs", 3000);
  }

}
