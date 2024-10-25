import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(
    private router: Router,
    ){}
        items: MenuItem[] | undefined;

        ngOnInit() {
            this.items = [
                {
                    label: 'Acceuil',
                    icon: 'pi pi-home',
                    command: () => this.onHomeClick(),
                },
                {
                    label: 'Déconnecter',
                    icon: 'pi pi-power-off',
                }
            ]
        }

        onHomeClick() {
            alert('Accueil cliqué');
            //this.router.navigate(['/profil']);
        }
        onLogoutClick(){
            alert('lougout cliqué')
        }
}
