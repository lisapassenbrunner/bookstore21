import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Token{
  exp: number;
  user: {
    id: string;
  }
}

@Injectable({
    providedIn: 'root'
  })

export class AuthenticationService {
  private api = "https://bookstore21.s1810456024.student.kwmhgb.at/api";

  constructor(private http: HttpClient){

  }

  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }
}
