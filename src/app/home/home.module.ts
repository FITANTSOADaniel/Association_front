import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PageComponent } from '../page/page.component';
import { PageProfilComponent } from '../page-profil/page-profil.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
    { path: 'page', component: PageComponent },
    { path: 'profil', component: PageProfilComponent }
    ])
  ]
})
export class HomeModule { }
