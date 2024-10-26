import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PageComponent } from '../page/page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
    { path: 'page', component: PageComponent }
    ])
  ]
})
export class HomeModule { }
