import { Component, OnInit } from '@angular/core';
import { Sortie } from '../../../models/sortie';
import { ToastMessageService } from '../../../services/toast-message.service';
import { EntreesSortiesService } from '../../../services/entrees-sorties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-voir-sorties',
  templateUrl: './voir-sorties.component.html',
  styleUrls: ['./voir-sorties.component.scss']
})
export class VoirSortiesComponent implements OnInit {

  sortiesSubscription:Subscription;
  sorties:Sortie[];

  constructor(private toast_service:ToastMessageService, private entreesSorties_service:EntreesSortiesService) { }

  ngOnInit() {
    this.loadSorties();
  }

  sortiesIsEmpty() {
    if (this.sorties) {
      if (this.sorties.length == 0)
        return true;
      else
        return false
    }
  }

  loadSorties() {
    this.sortiesSubscription = this.entreesSorties_service.getSorties().subscribe(
      (receivedSorties) => {
        this.sorties = receivedSorties;
        console.log(this.sorties);
      },
      (errorMessage) => {
        this.toast_service.showToastError("Erreur de chargement des sorties, rechargez cette fenêtre", 5000);
        console.log(errorMessage);
      },
      () => {
        this.sortiesSubscription.unsubscribe();
      }
    );
  }

}
