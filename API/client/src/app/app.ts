import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected  title = 'Dating App';
  protected members = signal<any>([])
  
  async ngOnInit() {
    this.members.set(await this.getMembers())
}
  async getMembers(){
  try {
    return lastValueFrom( this.http.get('http://localhost:5264/api/members'))
    
  } catch (error) {
    console.log(error);
    throw error;
  }
}
  
}
