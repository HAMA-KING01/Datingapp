import { contentChild, Injectable } from '@angular/core';
import { Messages } from '../../features/messages/messages';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {
    this.createToastContainer();
  }

  private createToastContainer() {
    if (!document.getElementById('toast-container')) {
      const container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast toast-bottom toast-end';
      document.body.appendChild(container);
    }
  }
  private createToastElement(
    message: string,
    alertClass: string,
    duration = 5000
  ) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.classList.add('alert',alertClass,'shadow-lg');
    toast.innerHTML = `
      <span>${message}</span>
      <button class="ml-4 btn btn-sm btn-ghost">x</button>
    ` // we are allow to use javascript and normal string inside this backtip

    toast.querySelector('button')?.addEventListener('click', () => {
      toastContainer.removeChild(toast); //remove the toast from screen
    });
    toastContainer.append(toast);

    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast);
      }
    }, duration);
  }

  success(message: string, duration?: number) {
    this.createToastElement(message, 'alert-success', duration);
  }

  error(message: string, duration?: number) {
    this.createToastElement(message, 'alert-error', duration);
  }

  worning(message: string, duration?: number) {
    this.createToastElement(message, 'alert-worning', duration);
  }

  info(message: string, duration?: number) {
    this.createToastElement(message, 'alert-info', duration);
  }
}
