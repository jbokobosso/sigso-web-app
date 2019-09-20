import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Interface } from 'readline';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EntreesSortiesService } from '../../../services/entrees-sorties.service';
import { ToastMessageService } from '../../../services/toast-message.service';
import { Produit } from '../../../models/produit';

@Component({
  selector: 'app-declarer-entree',
  templateUrl: './declarer-entree.component.html',
  styleUrls: ['./declarer-entree.component.scss']
})
export class DeclarerEntreeComponent implements OnInit {

  private produits: Observable<Produit>;
  private entreeSubscription: Subscription;
  private produit: FormControl;
  private qteEntree: FormControl;
  private raisonEntree: FormControl;
  private declarerEntreeForm: FormGroup;

  constructor(private entreesSorties_service:EntreesSortiesService, private toast_service:ToastMessageService) { }

  ngOnInit() {
    this.initForm();
    this.loadProduits();
  }

  loadProduits() {
    this.produits = this.entreesSorties_service.getProduits();
    // this.produits.subscribe((data)=>console.log(data));
    // console.log(new Date().toLocaleString());
  }

  initForm() {
    this.produit = new FormControl("", Validators.required);
    this.qteEntree = new FormControl("", Validators.required);
    this.raisonEntree = new FormControl("", Validators.required);
    this.declarerEntreeForm = new FormGroup({
      produit: this.produit,
      qteEntree: this.qteEntree,
      raisonEntree: this.raisonEntree
    });
  }

  onSubmit() {
    if (this.declarerEntreeForm.valid) {
      this.entreeSubscription = this.entreesSorties_service.saveEntree(this.declarerEntreeForm.value).subscribe(
        () => {},
        (errorMessage) => {
          this.toast_service.showToastError("Erreur de sauvegarde, reéssayez", 5000);
          console.log(errorMessage);
        },
        () => {
          this.toast_service.showToastSuccess("Entrée déclarée et sauvegardée", 5000);
          this.entreeSubscription.unsubscribe();
          this.declarerEntreeForm.reset();
        }
      );
    } else this.toast_service.showWarnningMessage("Veuillez remplir tous les champs", 3000);
  }

}
