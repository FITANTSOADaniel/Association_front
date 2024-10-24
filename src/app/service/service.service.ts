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
}
