import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/service/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);
  protected cards: any = {};
  //protected loggedIn = signal(false) // it going to store the statec wether or not we are logged in

  login() {
    this.accountService.login(this.cards).subscribe({
      next: (result) => {
        console.log(result);
        this.cards = {};
      },
      error: (error) => alert(error.message),
    });
  }

  logout() {
    this.accountService.logout();
  }
}
