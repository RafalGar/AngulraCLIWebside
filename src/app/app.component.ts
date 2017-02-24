import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    lat: number = 52.162370;
  lng: number = 21.076760;
  zoom: number = 16;
}
