import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, CommandesLivraisonsService } from '../../services/commandes-livraisons.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {

  private clients: Observable<Client>;
  
  constructor(private commandes_livraison_service:CommandesLivraisonsService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clients = this.commandes_livraison_service.loadClients();
  }

}
