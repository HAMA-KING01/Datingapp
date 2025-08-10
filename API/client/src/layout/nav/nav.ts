import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/service/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/service/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink,RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);
  private router = inject(Router);
  private toast = inject(ToastService);
  protected cards: any = {};
  //protected loggedIn = signal(false) // it going to store the statec wether or not we are logged in

  login() {
    this.accountService.login(this.cards).subscribe({
      next: (result) => {
        this.router.navigateByUrl('/members');
        this.toast.success('logged in successfully')
        this.cards = {};
      },
      error: (error) => {
        this.toast.error(error.error);
      }
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }
}
