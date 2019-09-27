import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Client, CommandesLivraisonsService } from '../../../services/commandes-livraisons.service';
import { ToastMessageService } from '../../../services/toast-message.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {

  client_search:FormControl;  
  clients_subscription: Subscription;
  clients: Client[];
  
  constructor(private commandes_livraison_service:CommandesLivraisonsService, private toast_message:ToastMessageService) { }

  ngOnInit() {
    this.loadClients();
    this.client_search = new FormControl("");
  }

  onSearchChange(searchValue:string) {
    for (let index = 0; index < this.clients.length; index++) {
      const current_client = this.clients[index];
      if (!current_client.nom.startsWith(searchValue)) {
        this.clients.splice(index, 1);
        console.log(this.clients);
        // console.log("CLIENT-"+current_client.idClient + " "+current_client.nom+ " " +current_client.prenom);
      }
    }
  }

  loadClients() {
    this.clients_subscription = this.commandes_livraison_service.loadClients().subscribe(
      (received_clients) => {
        this.clients = received_clients;
      },
      (errorMessage) => {
        this.toast_message.showToastError("Echec du chargement des clients", 3000)
        console.log(errorMessage)
      },
      () => {
        console.log(this.clients);
        this.clients_subscription.unsubscribe();
      }
    );
  }

}
