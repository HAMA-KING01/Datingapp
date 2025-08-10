import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { loginCreds, RegisterCreds, User } from '../../types/user';
import { retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);

  baseUrl = 'http://localhost:5264/api/';

  register(creds: RegisterCreds) {
    return this.http.post<User>(this.baseUrl + 'account/register', creds).pipe(
      tap((user) => {
        if (user) {
          if (user) {
            this.setCurrentUser(user);
          }
        }
      })
    )
  }

  login(cards: loginCreds) {
    return this.http.post<User>(this.baseUrl + 'account/login', cards).pipe(
      tap((user) => {
        if (user) {
          if (user) {
            this.setCurrentUser(user);
          }
        }
      })
    )
  }

  setCurrentUser(user: User) {
    //to avoid of duplicate
    localStorage.setItem('user', JSON.stringify(user)); // to fishing the data
    this.currentUser.set(user); //update the signal inside this accountService
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
