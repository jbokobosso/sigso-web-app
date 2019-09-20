import { Component, OnInit } from '@angular/core';
import { Entree } from '../../../models/entree';
import { Subscription } from 'rxjs';
import { ToastMessageService } from '../../../services/toast-message.service';
import { EntreesSortiesService } from '../../../services/entrees-sorties.service';

@Component({
  selector: 'app-voir-entrees',
  templateUrl: './voir-entrees.component.html',
  styleUrls: ['./voir-entrees.component.scss']
})
export class VoirEntreesComponent implements OnInit {

  entreesSubscription:Subscription;
  entrees:Entree[];

  constructor(private toast_service:ToastMessageService, private entreesSorties_service:EntreesSortiesService) { }

  ngOnInit() {
    this.loadEntrees();
  }

  entreesIsEmpty() {
    if (this.entrees) {
      if (this.entrees.length == 0)
        return true;
      else
        return false
    }
  }

  loadEntrees() {
    this.entreesSubscription = this.entreesSorties_service.getEntrees().subscribe(
      (receivedEntrees) => {
        this.entrees = receivedEntrees;
        console.log(this.entrees);
      },
      (errorMessage) => {
        this.toast_service.showToastError("Erreur de chargement des entrées, rechargez cette fenêtre", 5000);
        console.log(errorMessage);
      },
      () => {
        this.entreesSubscription.unsubscribe();
      }
    );
  }

}
