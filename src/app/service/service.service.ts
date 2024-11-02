import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { jwtDecode } from "jwt-decode";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${environment.url}/api/login_client`, { email, password })
      .pipe(
        map((user) => {
          this.userSubject.next(user);
          const {
            authorisation: { token },
          } = user;     
          document.cookie = `sessionUser=${token}; path=/`;
          return user;
        })
      );
  }

  signup(data: any){
    return this.http.post(`${environment.url}/api/demande`, data);
  }

  getAllAssociations(){
    return this.http.get(`${environment.url}/api/association`, {});
  }

  getAllPosts(){
    return this.http.get(`${environment.url}/api/posts`, {});
  }

  decodeToken(): any | null {
    try {
      let token = this.cookieService.get("sessionUser");
      if (token) {
        const decodedToken: any = jwtDecode(token);
        return decodedToken;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Erreur lors du décodage du token : ", error);
      return null;
    }
  }
  findUser(): any {
    try {
      const decodedToken = this.decodeToken();
      if (decodedToken) {
        const user: any = {
          id: decodedToken.sub,
          first_name: decodedToken.first_name,
          last_name: decodedToken.last_name,
          is_admin: decodedToken.is_admin,
        };
        return user;
      } else {
        console.log(
          "Token introuvable"
        );
        return null;
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du token : ", error);
      return null;
    }
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${environment.url}/api/logout`, {});
  }
  createPost(data:any){
    return this.http.post<any>(`${environment.url}/api/posts`, data);
  }
}
