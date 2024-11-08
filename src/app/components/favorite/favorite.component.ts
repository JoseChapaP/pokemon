import { Component,  OnInit, inject } from '@angular/core';
import { Pokemon, PokemonFull } from '../../core/pokemon';
import { PokemonDetailService } from '../../services/pokemon-detail.service';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  pokemon: Pokemon;
  pokemonFull: PokemonFull;
  error: any;
  private readonly subs = new Subscription();  

  constructor(
    private readonly pokemonDetailService: PokemonDetailService
  ) {}

  ngOnInit() {
    console.log(this.data.pokemon.url);
    this.getFullInfo(this.data.pokemon.url);
  }

  getFullInfo(url: string) {
    
    const sub = this.pokemonDetailService
      .getPokemonDetail(url)
      .subscribe(
        {
          next: (resp: PokemonFull) => 
          {
            this.pokemonFull = resp;
          },
          error: (error) => {
            this.error = error;
          }
        }
    );
  }
}
