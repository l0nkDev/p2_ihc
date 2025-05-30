import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private router: Router ) {}
  title = 'p2_ihc';

  currentroute = ''

  onRouteUpdate() {
    this.currentroute = this.router.url;
  }

  ngOnInit() {
    this.onRouteUpdate()
    this.router.events.subscribe(val => {this.onRouteUpdate()})
  }
}
