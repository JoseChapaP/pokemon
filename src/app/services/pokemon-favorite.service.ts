import { Injectable } from '@angular/core';
import { Pokemon } from '../core/pokemon';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonFavoriteService {

  public pokemonFavorite: Pokemon;
  
  private _favorite: BehaviorSubject<Pokemon>;

  constructor() {
    this._favorite = new BehaviorSubject<Pokemon>(this.pokemonFavorite);
  }

  setFavorite(pokemonSelected: Pokemon) {
    this.pokemonFavorite = pokemonSelected;
    this._favorite.next(this.pokemonFavorite);
  }
  
  get pokFavorite() {
    return this._favorite.asObservable();
  }
}
