import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  environments: any;
  contenuTexte : string = ""
  posts : any[] = []
  pathUrl : string = ""
  pubBody = {
    desc: "",
    user_id : this.service.findUser().id
  };
  constructor(
    private router: Router,
    private service: ServiceService,
    ){}

    ngOnInit(){
      this.environments = environment
      this.pathUrl = environment.PATH_URL;
      this.getAllPosts()
    }
    getAllPosts(){
      this.service.getAllPosts().subscribe(
        (reponse: any) =>{
          this.posts = reponse.posts
          console.log(this.posts);
        },
        (error)=>{
          this.posts = error.message
        }
      )
    }

    publier(){
      this.service.createPost(this.pubBody).subscribe(
        (reponse: any) =>{
          this.posts = reponse.posts
          console.log(this.posts);
        },
        (error)=>{
          this.posts = error.message
        }
      )
    }
}
