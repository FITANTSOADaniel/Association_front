import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner'
import { ProgressSpinner } from 'primeng/progressspinner';
import { ServiceService } from '../service/service.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
        
@Component({
    selector: 'divider-login-demo',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLogin: boolean = true;
  errorMessage: string = ""
  errorMessage1: string = ""
  isLoading: boolean = false
  visible: boolean = false;

  userBody = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    association_id: null,
    level_id: 1,
    is_admin: 0
  };

  associations: any[] = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private load: ProgressSpinner, 
    private service: ServiceService, 
    private cookieService: CookieService
  ) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit(){
    this.showAssociation()
  }

  showAssociation(){
    this.service.getAllAssociations().subscribe(
      (reponse: any) =>{
        this.associations = reponse.associations
      }
    )
  }

  login() {
    this.isLoading = true
    this.errorMessage="";
    this.errorMessage1="";
    if (!this.isValidEmail(this.userBody.email)) {
        this.errorMessage = "Format d'e-mail invalide";
        this.isLoading = false
        return;
    }
    if (this.isValidPassword(this.userBody.password)) {
      this.errorMessage1 = "Mot de passe doit contenir au moins 6 caractères";
      this.isLoading = false
      return;
    }
    this.isLoading = true

    this.service.login(this.userBody.email, this.userBody.password).subscribe(
      (user) => {
          this.cookieService.set('sessionUser', user.authorisation.token)
          this.isLoading = false
          this.router.navigate(['/home']);
      },
      (error: any) => {
        this.isLoading = false
        this.messageService.add({ severity: 'error', summary: 'Error', detail:  status });
      }
    );
  }

  signup(){
    this.isLoading = true
    this.errorMessage="";
    this.errorMessage1="";
    if (!this.isValidEmail(this.userBody.email)) {
        this.errorMessage = "Format d'e-mail invalide";
        this.isLoading = false
        return;
    }
    if (this.isValidPassword(this.userBody.password)) {
      this.errorMessage1 = "Mot de passe doit contenir au moins 6 caractères";
      this.isLoading = false
      return;
    }
    this.isLoading = true

    this.service.signup(this.userBody).subscribe(
      (user) => {
          this.isLoading = false
          this.isLogin = true;
          this.clearForm()
          this.showDialog()
          this.router.navigate(['/']);
      },
      (error: any) => {
        this.isLoading = false
        this.messageService.add({ severity: 'error', summary: 'Error', detail:  status });
      }
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidPassword(password: string): boolean {
    return password.length < 6;
  }

  showDialog() {
    this.visible = true;
  }

  clearForm() {
    this.userBody.first_name = "";
    this.userBody.last_name = "";
    this.userBody.email = "";
    this.userBody.is_admin = 0;
    this.userBody.password = "";
    this.userBody.association_id= null
    this.userBody.level_id= 1;
  }
}