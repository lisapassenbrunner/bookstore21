import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Token {
  exp: number;
  user: {
    id: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private api: string =
    "https://bookstore21.s1810456024.student.kwmhgb.at/api/auth";

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public setLocalStorage(token: string) {
    console.log("storing token");
    console.log(jwt_decode(token));
  }
}
