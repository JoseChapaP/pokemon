import { Injectable } from '@angular/core';
import { Pokemon, PokemonFull } from '../core/pokemon';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLS } from './shared/urls';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  public pokemonInfo: Pokemon;
  public pokemonDetail: Pokemon;
  private _pokemon: BehaviorSubject<Pokemon>;

  constructor(    
    private httpClient: HttpClient
  ) {
    this._pokemon = new BehaviorSubject<Pokemon>(this.pokemonDetail);
  }

  viewDetail(pokemonSelected: Pokemon) {
    this.pokemonDetail = pokemonSelected;
    this._pokemon.next(this.pokemonDetail);
  }

  get pokemonSelected() {
    return this._pokemon.asObservable();
  }

  getPokemonDetail(url: string): Observable<PokemonFull> {
    return this.httpClient.get<PokemonFull>(url);
  }
}
