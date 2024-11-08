import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { URLS } from './shared/urls';
import { PokemonList } from '../core/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  private host = "https://pokeapi.co";
  private endpoint = URLS.list + '?offset=0&limit=2000"';

  constructor(
    private httpClient: HttpClient
  ) {}

  getPokemonList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(this.host + this.endpoint);
  }

}