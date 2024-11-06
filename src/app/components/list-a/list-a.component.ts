import { Component, OnInit } from '@angular/core';
import { PokemonListService } from '../../services/pokemon-list.service';
import { Subscription } from 'rxjs';
import { PokemonList, Pokemon } from '../../core/pokemon';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.scss']
})

export class ListAComponent implements OnInit  {

  pokemonList: Pokemon[] = [];
  error: any;
  private readonly subs = new Subscription();
  
  constructor(
    private readonly pokemonListService: PokemonListService
  ) {}

  ngOnInit() {
    this.getList();
  }

  async getList() {
    const sub = this.pokemonListService
    .getPokemonList()
    .subscribe(
      {
        next: (resp: PokemonList) => {
          this.pokemonList = resp.result;
        },
        error: (err) => {
          this.error = err;
        }
      }
    )    
    this.subs.add(sub);
  }

}
