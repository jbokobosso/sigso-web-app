import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastMessageService } from '../../../services/toast-message.service';
import { ApproService } from '../../../services/appro.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.scss']
})
export class ModifierArticleComponent implements OnInit {

  form_is_invalid: boolean = false;
  private categories: Observable<any>;
  private loadedProduit: any;
  produitSaveSubscription: Subscription;
  private loadedProduitSubscription: Subscription;
  private produits: Observable<any>;
  private modifierProduitForm: FormGroup;
  private designation: FormControl;
  private estPerissable: FormControl;
  private prixU: FormControl;
  private produit: FormControl;
  private catProduit: FormControl;

  constructor(private appro_service:ApproService, private toast_message_service:ToastMessageService, private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.loadProduitsFromDatabase();
    this.loadCategoriesFormDatabase();
  }

  initForm() {
    this.designation = new FormControl('');
    this.estPerissable = new FormControl('');
    this.prixU = new FormControl('');
    this.produit = new FormControl('');
    this.catProduit = new FormControl('');

    this.modifierProduitForm = new FormGroup({
      designation: this.designation,
      estPerissable: this.estPerissable,
      prixU: this.prixU,
      idProduit: this.produit,
      catProduit: this.catProduit
    })
  }

  onSelectedProduit() {
    this.loadedProduitSubscription = this.appro_service.loadProductById(this.produit.value)
    .subscribe( (loadedProduit) => {
      this.loadedProduit = loadedProduit;
      this.designation.setValue(loadedProduit.designation);
      this.estPerissable.setValue(loadedProduit.estPerissable);
      this.prixU.setValue(loadedProduit.prixU);
    },
    (errorMessage) => {
      console.log(errorMessage);
      // this.toast_message_service.showToastError("Une erreur s'est produite lors du chargement du produit à modifier", 7000);
     },
     () => {
       this.loadedProduitSubscription.unsubscribe();
       this.toast_message_service.showWarnningMessage("Veuillez modifier les informations nécessaires", 10000);
     } )
  }

  loadProduitsFromDatabase() {
    this.produits = this.appro_service.loadProducts();
  }

  loadCategoriesFormDatabase() {
    this.categories = this.appro_service.loadCategories();
  }

  onSubmit() {
    if(this.modifierProduitForm.invalid) {
      this.form_is_invalid = true;
    } else {
        this.produitSaveSubscription = this.appro_service.updateProduit(this.produit.value, this.modifierProduitForm.value).subscribe(
        (serverResponse) => {},
        (errorMessage) => {
          this.toast_message_service.showToastError("Une erreur s'est produite lors de l'enregistrement, veuillez reéssayer s'il vous plaît.", 7000);
          console.log(errorMessage);
        },
        () => {
          this.toast_message_service.showToastSuccess("Produit modifié avec succès !", 6000);
          this.produitSaveSubscription.unsubscribe();
          this.modifierProduitForm.reset();
          this.router.navigate(["/appro"]);
        }
        )
      }
    }

  resetForm() {
    this.modifierProduitForm.reset();
  }

}
