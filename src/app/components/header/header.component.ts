import { Component, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../core/pokemon';
import { PokemonFavoriteService } from '../../services/pokemon-favorite.service';
import { 
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent 
} from '@angular/material/dialog';
import { FavoriteComponent } from '../favorite/favorite.component';

export interface DialogData {
  pokemon: Pokemon;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pokemon: Pokemon;
  dialog = inject(MatDialog);

  constructor(
    private readonly pokemonFavoriteService: PokemonFavoriteService
  ) {}

  ngOnInit() {
    this.pokemonFavoriteService.pokFavorite.subscribe({
      next: (pokemonFavorite: Pokemon) => {
        if(pokemonFavorite) {
          this.pokemon = pokemonFavorite;    
        }
      }
    })
  }

  showInfo(pokemon: Pokemon) {
    this.dialog.open(FavoriteComponent, {
      data: {
        pokemon: this.pokemon,
      },
    });
  }
  
}
