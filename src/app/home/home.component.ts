import { Component,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { ServiceService } from '../service/service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    sidebarVisible: boolean = true;
    userName:any ="";

    constructor(
    private router: Router,
    private cookieService: CookieService,
    private service: ServiceService,
    private confirmationService: ConfirmationService,
     private messageService: MessageService
    ){}
    ngOnInit() {
      this.userName=this.service.findUser().first_name+" "+this.service.findUser().last_name;
    }

    logout() {
      this.confirmationService.confirm({
        message: "Etes vous sur de se déconnecter?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        acceptIcon: "none",
        rejectIcon: "none",
        rejectButtonStyleClass: "p-button-text",
        acceptLabel: "Oui", 
        rejectLabel: "Non",
        accept: () => {
          this.logoutCurrentUser();
        },
        reject: () => {},
      });
    }

    logoutCurrentUser(): void {
      const token = this.cookieService.get('sessionUser');
      if (!token) {
        console.error('Token non trouvé dans le cookie');
        return;
      }
      this.service.logout().subscribe(
        (data) => {
          console.log("Déconnexion réussie");
          this.cookieService.delete('sessionUser','/');
          this.router.navigate(['']);
        },
        (error) => {
          //let status = this.statusService.getStatus();
          this.messageService.add({ severity: 'error', summary: 'Error', detail:  status });
        }
      );
    }
}
