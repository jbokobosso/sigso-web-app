import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApproService } from '../../../services/appro.service';
import { ToastMessageService } from '../../../services/toast-message.service';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.scss']
})

export class AjouterCategorieComponent implements OnInit {

  saveSubscription: Subscription;
  ajouterCatForm: FormGroup;
  libelleCat: FormControl;
  descCatProd: FormControl;

  constructor(private appro_service: ApproService, private toast_service: ToastMessageService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.libelleCat = new FormControl('', Validators.required)
    this.descCatProd = new FormControl('')

    this.ajouterCatForm = new FormGroup({
      libelleCat: this.libelleCat,
      descCatProd: this.descCatProd
    });
  }

  onSubmit() {
    this.saveSubscription = this.appro_service.saveCategorie(this.ajouterCatForm.value)
    .subscribe(
      data => {},
      (errorMessage) => {console.log(errorMessage)},
      () => {
        this.saveSubscription.unsubscribe();
        this.toast_service.showToastSuccess('Nouvelle catégorie enregistrée avec succès !', 5000)
      }
    );
  }

  resetForm() {
    this.ajouterCatForm.reset();
  }


}
