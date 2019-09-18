import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ToastMessageService } from '../../../services/toast-message.service';
import { ApproService } from '../../../services/appro.service';

@Component({
  selector: 'app-nouvel-approvisionnement',
  templateUrl: './nouvel-approvisionnement.component.html',
  styleUrls: ['./nouvel-approvisionnement.component.scss']
})
export class NouvelApprovisionnementComponent implements OnInit {

  private saveAchatSubscription:Subscription;
  private produits: Observable<any>;
  private fournisseurs: Observable<any>;
  private idProduit: FormControl;
  private idFournisseur: FormControl;
  private qteAchat: FormControl;
  private dateAchat: FormControl;
  private nouvelApproForm: FormGroup;
  
  constructor(private appro_service:ApproService, private toast_service:ToastMessageService) { }

  initForm() {
    this.idProduit = new FormControl("");
    this.idFournisseur = new FormControl("");
    this.qteAchat = new FormControl("");
    this.dateAchat = new FormControl("");

    this.nouvelApproForm = new FormGroup({
      idProduit: this.idProduit,
      idFournisseur: this.idFournisseur,
      qteAchat: this.qteAchat,
      dateAchat: this.dateAchat
    });
  }
  
  ngOnInit() {
    this.initForm();
    this.chargerProduits();
    this.chargerFournisseurs();
  }

  onSubmit() {
    this.saveAchatSubscription = this.appro_service.saveAchat(this.nouvelApproForm.value).subscribe(
      (serverResponse) => {},
      (errorMessage) => {
        this.toast_service.showToastError("Erreur lors de la sauvegarde, veuillez reéssayer", 5000);
        console.log(errorMessage);
      },
      () => {
        this.toast_service.showToastSuccess("Achat enregistré avec succès !!!", 5000);
        this.saveAchatSubscription.unsubscribe();
      }
    );
  }

  chargerProduits() {
    this.produits = this.appro_service.loadProducts();
  }

  chargerFournisseurs() {
    this.fournisseurs = this.appro_service.loadFournisseurs();
  }

}
