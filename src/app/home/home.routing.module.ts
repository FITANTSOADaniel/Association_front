import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageComponent } from './page/page.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
      children: [
        {
          path: "page", 
          component: PageComponent, 
        },
        {
          path: "profil",
          component: ProfilComponent,
        },
        {
          path: "",
          redirectTo: "page",
          pathMatch: "full",
        },
        { path: "**", redirectTo: "page", pathMatch: "full" },
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class HomeRoutes {}