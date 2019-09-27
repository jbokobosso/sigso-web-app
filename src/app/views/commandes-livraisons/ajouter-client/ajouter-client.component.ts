import { Component, OnInit } from '@angular/core';
import { Client, CommandesLivraisonsService } from '../../../services/commandes-livraisons.service';
import { Observable, Subscription } from 'rxjs';
import { ToastMessageService } from '../../../services/toast-message.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent implements OnInit {

  private save_client_subscription:Subscription;
  private nom:FormControl;
  private prenom:FormControl;
  private email:FormControl;
  private telephone:FormControl;
  private adresse:FormControl;
  private ajouter_client:FormGroup;

  constructor(
    private commandes_livraison_service:CommandesLivraisonsService, 
    private toast_service:ToastMessageService,
    private router:Router
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.nom = new FormControl('', Validators.required);
    this.prenom = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.telephone = new FormControl('', Validators.required);
    this.adresse = new FormControl('', Validators.required);
    this.ajouter_client = new FormGroup({
      nom: this.nom,
      prenom: this.prenom,
      telephone: this.telephone,
      email: this.email,
      adresse: this.adresse
    })
  }

  onAjouterClient() {
    if (this.ajouter_client.valid) {
      this.save_client_subscription = this.commandes_livraison_service.saveClient(this.ajouter_client.value)
      .subscribe(
        () => {},
        (errorMessage) => {
          this.toast_service.showToastError("Erreur lors de la sauvegarde, reéssayez", 5000);
          console.log(errorMessage);
        },
        () => {
          this.toast_service.showToastSuccess(this.nom.value + " " + this.prenom.value+ " enregistré !!!", 5000);
          this.refreshClientsList();
          this.save_client_subscription.unsubscribe();
        }
      );
    } else {
      this.toast_service.showWarnningMessage("Veuillez remplir tous les champs correctement", 5000);
    }
    
  }

  private refreshClientsList() {
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/commandes-livraisons/ajouter-client"])); 
  }

}
