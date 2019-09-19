import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastMessageService } from '../../services/toast-message.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  private registerSubscription: Subscription;
  private firstName: FormControl;
  private lastName: FormControl;
  private email: FormControl;
  private username:FormControl;
  private password: FormControl;
  private confirm_password: FormControl;
  private signup_form: FormGroup;

  constructor(private toast_service:ToastMessageService, private auth_service:AuthService, private router:Router) { }

  initForm() {
    this.firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.confirm_password = new FormControl('', [Validators.required, Validators.minLength(4)]);

    this.signup_form = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      confirm_password: this.confirm_password
    });
  }

  areEqual():boolean {
    if(this.password.value == this.confirm_password.value)
      return true
    else
      return false
  }

  onSubmit() {
    if(this.signup_form.valid && this.areEqual()) {
      this.registerSubscription = this.auth_service.register(this.signup_form.value).subscribe(
        () => {},
        (errorMessage) => {
          this.toast_service.showToastError("Le serveur a mal répondu, reéssayez");
          console.log(errorMessage);
        },
        () => {
          this.registerSubscription.unsubscribe;
          this.toast_service.showToastSuccess("Bien reçu," + this.username.value + " Vous pouvez vous connecter désormais", 5000);
          this.router.navigate(["/login"]);
        }
      );
    }
    else if(this.signup_form.valid && !this.areEqual())
      this.toast_service.showToastError("Les deux mots de passe ne concordents pas", 5000)
    else
      this.toast_service.showToastError("Veuillez remplir tous les champs", 5000)
      
  }

  ngOnInit() {
    this.initForm();
  }

}
