import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './home.routing.module';
import { ImageModule } from 'primeng/image';
import { PageComponent } from './page/page.component';
import { ProfilComponent } from './profil/profil.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes,
    ImageModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    AvatarModule,
    FieldsetModule,
    CardModule,
    InputTextareaModule,
    FormsModule
  ],
  exports: []
})
export class HomeModule { }
