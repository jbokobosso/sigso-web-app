import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApproService } from '../../../services/appro.service';
import { ToastMessageService } from '../../../services/toast-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.scss']
})
export class ModifierCategorieComponent implements OnInit {

  saveCategorySubscription: Subscription;
  loadedCategorySubscription: Subscription;
  categories: Observable<any>;
  modifyCatForm: FormGroup;
  category_to_be_modified: FormControl;
  libelleCat: FormControl;
  descCatProd: FormControl;
  id_to_be_modified: FormControl

  constructor(private appro_service:ApproService, private toast_message_service:ToastMessageService, private router: Router) { }

  initForm() {
    this.category_to_be_modified = new FormControl('');
    this.libelleCat = new FormControl('');
    this.descCatProd = new FormControl('');
    this.id_to_be_modified = new FormControl('');

    this.modifyCatForm = new FormGroup({
      libelleCat: this.libelleCat,
      descCatProd: this.descCatProd,
      category_to_be_modified: this.category_to_be_modified,
      id_to_be_modified: this.id_to_be_modified
    })
  }

  loadCategoriesFromDatabase() {
    this.categories = this.appro_service.loadCategories();
    // this.appro_service.loadCategories().subscribe(
    //   (categories) => {
    //     console.log(categories);
    //   }
    // )
  }

  onSelectedCategory() {
    this.id_to_be_modified.setValue(this.category_to_be_modified.value);
    this.loadCategory();
  }

  loadCategory() {
    this.loadedCategorySubscription = this.appro_service.loadCategoryById(this.category_to_be_modified.value).subscribe((loadedCat) => {
      this.libelleCat.setValue(loadedCat.libelleCat);
      this.descCatProd.setValue(loadedCat.descCatProd);
    }, (errorMessage) => console.log(errorMessage), () => this.loadedCategorySubscription.unsubscribe);
  }

  onSubmit() {
    this.saveCategorySubscription = this.appro_service.updateCategory(
      this.id_to_be_modified.value, 
      {"idCatProd": parseInt(this.id_to_be_modified.value, 10), "libelleCat": this.libelleCat.value, "descCatProd": this.descCatProd.value}).subscribe(
      (serverResponse) => console.log(serverResponse),
      (error) => console.log(error),
      () => {
        this.saveCategorySubscription.unsubscribe();
        this.toast_message_service.showToastSuccess("Catégorie mise à jour avec succès !!!", 6000);
        this.modifyCatForm.reset();
        this.router.navigate(["/appro"]);
      }
    );
  }

  ngOnInit() {
    this.initForm();
    this.loadCategoriesFromDatabase();
  }

}
