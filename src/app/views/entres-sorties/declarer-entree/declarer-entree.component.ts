import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Interface } from 'readline';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-declarer-entree',
  templateUrl: './declarer-entree.component.html',
  styleUrls: ['./declarer-entree.component.scss']
})
export class DeclarerEntreeComponent implements OnInit {

  private produit: FormControl;
  private qteEntree: FormControl;
  private raisonEntree: FormControl;
  private dateEntree: FormControl;
  private declarerEntreeForm: FormGroup;

  private produits:Observable<any>;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.produit = new FormControl("", Validators.required);
    this.qteEntree = new FormControl("", Validators.required);
    this.raisonEntree = new FormControl("", Validators.required);
    this.dateEntree = new FormControl("", Validators.required);
    this.declarerEntreeForm = new FormGroup({
      produit: this.produit,
      qteEntree: this.qteEntree,
      raisonEntree: this.raisonEntree,
      dateEntree: this.dateEntree
    });
  }

  onSubmit() {

  }

}
