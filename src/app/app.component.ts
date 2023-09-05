import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numOfPokemons = []

  ngOnInit() {
    this.numOfPokemons.length = 20;
  }
}
