import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected  title = 'Dating App';
  
  ngOnInit(): void {
   this.http.get('http://localhost:5264/api/members').subscribe({
    next: response => console.log(response),
    error: error => console.log(error),
    complete: () => console.log('completed the http request')
  })
}
  
}
