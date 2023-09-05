import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  name : string = "";
  imgUrl : string = "";

  constructor(private pokemonService : PokemonService) {
  }

  ngOnInit(): void{
    this.getAllPokemonsAvailable();
  }

  getAllPokemonsAvailable(){
    this.pokemonService.getPokemon(1).subscribe((data: any) => {
      this.name = data.name;
      this.imgUrl = data.sprites.front_default;
      console.log(this.name);
    });
  }
}
