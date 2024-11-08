import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonFull } from '../../core/pokemon';
import { PokemonDetailService } from '../../services/pokemon-detail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  pokemon: Pokemon;
  pokemonFull: PokemonFull;
  error: any;
  private readonly subs = new Subscription();  

  constructor(
    private readonly pokemonDetailService: PokemonDetailService
  ) {}

  ngOnInit() {
    this.pokemonDetailService.pokemonSelected.subscribe({
      next: (selectedPokemon: Pokemon) => {
        if(selectedPokemon) {
          this.pokemon = selectedPokemon;
          this.getFullInfo(selectedPokemon.url);      
        }
      }
    })
  }

  getFullInfo(url: string) {
    const sub = this.pokemonDetailService
      .getPokemonDetail(url)
      .subscribe(
        {
          next: (resp: PokemonFull) => 
          {
            this.pokemonFull = resp;
            console.log(this.pokemonFull);
          },
          error: (error) => {
            this.error = error;
          }
        }
    );
  }

}
