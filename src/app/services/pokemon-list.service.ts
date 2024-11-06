import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { URLS } from './shared/urls';
import { PokemonList } from '../core/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  private host = "https://pokeapi.co";
  private endpoint = URLS.list + '?offset=20&limit=2000"';

  constructor(
    private httpClient: HttpClient
  ) {}

  getPokemonList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(this.host + this.endpoint);
  }

}