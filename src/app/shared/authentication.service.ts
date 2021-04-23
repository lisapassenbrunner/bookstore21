import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class AuthenticationService {
  private api = "https://bookstore21.s1810456024.student.kwmhgb.at/api";

  
  login(email: string, password: string) {
    return false;
  }
}
