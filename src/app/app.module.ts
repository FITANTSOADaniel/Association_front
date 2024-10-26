import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressSpinner } from 'primeng/progressspinner';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HomeModule } from './home/home.module';
import { ProfilComponent } from './profil/profil.component';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    PageComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    DropdownModule,
    MessagesModule,
    ToastModule,
    ProgressSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DialogModule,
    MenubarModule,
    SidebarModule,
    HomeModule,
    AvatarModule,
    ImageModule,
    FieldsetModule,
    FileUploadModule
  ],
  providers: [MessageService, ProgressSpinner, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
