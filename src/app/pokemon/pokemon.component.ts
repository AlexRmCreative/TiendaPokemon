import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() id : number = 1;
  name : string = "";
  imgUrl : string = "";
  pokemons = [];


  constructor(private pokemonService : PokemonService) {
  }

  ngOnInit() {
    if(this.id > 0)
      this.setPokemonById(this.id);
  }
  setPokemonById(id: number){
    this.pokemonService.getPokemon(id).subscribe((data: any) => {
      this.name = data.name;
      this.imgUrl = data.sprites.front_default;
    });
  }
}
