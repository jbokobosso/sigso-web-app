import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { ToastMessageService } from './toast-message.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentials_size:number;
  private authErros = 0;
  private authSubscription: Subscription;

  constructor(
    private config_service:ConfigService, 
    private http:HttpClient, 
    private toast_message_service:ToastMessageService,
    private router: Router
    ) { }

  authenticate(formValue:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.authSubscription = this.http.get<any>(this.config_service.apiHostAddress+'/utilisateurs')
      .subscribe(
      (credentials) => {
        this.credentials_size = credentials.length;
        for (const key in credentials) {
          if (credentials[key].pseudo == formValue.username && credentials[key].mdp == formValue.password) {
            this.toast_message_service.showToastSuccess("Bienvenue, " + credentials[key].pseudo);
            this.setConnectedVariables(credentials[key].idUtilisateur, credentials[key].pseudo, credentials[key].typeUtilisateur);
            this.router.navigate(["/dashboard"]);
            break;
          } else {
            this.authErros++;
          }
        }
        // console.log(this.authErros);
        // console.log(this.credentials_size);
        if(this.authErros !=0 && this.credentials_size == this.authErros)
          this.toast_message_service.showToastError("Nom d'utilisateur ou mot de passe faussés, reéssayez", 5000);
          this.authErros = 0;
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.toast_message_service.showToastError("Le serveur d'authentification n'a pas répondu", 5000);
      },
      () => {
        this.authSubscription.unsubscribe;
        
      }
      )
  }

  public disconnect() {
    localStorage.removeItem("connectedUser");
    localStorage.removeItem("connectedUserType");
  }

  setConnectedVariables(connectedUserId, connectedUser:string, connectedUserType:string) {
    localStorage.setItem("connectedUserId", connectedUserId);
    localStorage.setItem("connectedUser", connectedUser);
    localStorage.setItem("connectedUserType", connectedUserType);
  }

  clearConnectedVariables() {
    localStorage.removeItem("connectedUserId");
    localStorage.removeItem("connectedUser");
    localStorage.removeItem("connectedUserType");
  }
}
