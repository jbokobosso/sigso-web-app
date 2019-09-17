import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApproService } from '../../../services/appro.service';
import { ToastMessageService } from '../../../services/toast-message.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.scss']
})
export class AjouterArticleComponent implements OnInit {
  
  saveArticleSubscription: Subscription;
  ajouterArticleForm: FormGroup;
  designation: FormControl;
  estPerissable: FormControl;
  prixU: FormControl;
  catProduit: FormControl;

  categories: Observable<any>;

  constructor(private appro_service: ApproService, private toast_message_service: ToastMessageService) { }

  ngOnInit() {
    this.initForm();
    this.loadCategoriesFromDatabase();
  }

  initForm() {
    this.designation = new FormControl('', Validators.required);
    this.estPerissable = new FormControl('', Validators.required);
    this.prixU = new FormControl('');
    this.catProduit = new FormControl('', Validators.required);

    this.ajouterArticleForm = new FormGroup({
      designation: this.designation,
      estPerissable: this.estPerissable,
      prixU: this.prixU,
      catProduit: this.catProduit
    })
  }

  loadCategoriesFromDatabase() {
    this.categories = this.appro_service.loadCategories();
  }

  onSubmit() {
    this.appro_service.saveArticle(this.ajouterArticleForm.value).subscribe(
      (serverResponse) => console.log(serverResponse),
      (errorMessage) => {
        this.toast_message_service.showToastError("Une erreur s'est produite. Veuillez reéssayer svp...", 7000)
        console.log(errorMessage);
      },
      () => {
        this.toast_message_service.showToastSuccess("Article enregistré avec succès !!!", 6000);
        this.ajouterArticleForm.reset;
        this.saveArticleSubscription.unsubscribe();
      }
    )
  }

}
