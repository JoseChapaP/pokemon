import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { PokemonListService } from '../../services/pokemon-list.service';
import { Observable, Subscription } from 'rxjs';
import { PokemonList, Pokemon } from '../../core/pokemon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonDetailService } from '../../services/pokemon-detail.service';
import { PokemonFavoriteService } from '../../services/pokemon-favorite.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.scss']
})

export class ListAComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() newItemEvent = new EventEmitter<any[]>();
  pokemonList: Pokemon[] = [];
  error: any;
  private readonly subs = new Subscription();  
  obs: Observable<any> | undefined;
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>(this.pokemonList);
  isFavorite: string;
  filteredOptions: Observable<string[]>;
  searchPokemon = new FormControl('');
  options: string[] = [];
  firstLetter = [
    {
      letter: "a",
      count: 0
    },
    {
      letter: "b",
      count: 0
    },
    {
      letter: "c",
      count: 0
    },
    {
      letter: "d",
      count: 0
    },
    {
      letter: "e",
      count: 0
    },
    {
      letter: "f",
      count: 0
    },
    {
      letter: "g",
      count: 0
    },
    {
      letter: "h",
      count: 0
    },
    {
      letter: "i",
      count: 0
    },
    {
      letter: "j",
      count: 0
    },
    {
      letter: "k",
      count: 0
    },
    {
      letter: "l",
      count: 0
    },
    {
      letter: "m",
      count: 0
    },
    {
      letter: "n",
      count: 0
    },
    {
      letter: "o",
      count: 0
    },
    {
      letter: "p",
      count: 0
    },
    {
      letter: "q",
      count: 0
    },
    {
      letter: "r",
      count: 0
    },
    {
      letter: "s",
      count: 0
    },
    {
      letter:  "t",
      count: 0
    },
    {
      letter: "u",
      count: 0
    },
    {
      letter: "v",
      count: 0
    },
    {
      letter: "w",
      count: 0
    },
    {
      letter: "x",
      count: 0
    },
    {
      letter: "y",
      count: 0
    },
    {
      letter: "z",
      count: 0
  }];

  constructor(
    private readonly pokemonListService: PokemonListService,
    private readonly pokemonDetailService: PokemonDetailService,
    private readonly pokemonFavoriteService: PokemonFavoriteService
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
          this.pokemonList = resp.results;
          this.pokemonList.forEach((pokemon) => {
            pokemon.image = pokemon.url
              .replace('https://pokeapi.co/api/v2/pokemon/', '')
              .replace('/', '.png');
            this.pokemonCount(pokemon.name.substring(0, 1).toLowerCase());
          })
          this.newItemEvent.emit(this.firstLetter);
          this.dataSource = new MatTableDataSource<Pokemon>(this.pokemonList);
          this.dataSource.paginator = this.paginator;
          this.obs = this.dataSource.connect();
          this.filterSearch();
        },
        error: (err) => {
          this.error = err;
        }
      }
    )    
    this.subs.add(sub);
  }

  showInfo(pokemon: Pokemon) {
    this.pokemonDetailService.viewDetail(pokemon);    
  }
      
  favorite(pokemon: Pokemon) {
    this.isFavorite = pokemon.name;
    this.pokemonFavoriteService.setFavorite(pokemon);
  }

  filterSearch() {
    this.filteredOptions = this.searchPokemon.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(value.length >= 3) {      
      this.pokemonList.forEach((pokemon) => { 
        this.options.push(pokemon.name)
      });
      let tempOptions = this.options.filter(option => option.toLowerCase().includes(filterValue));
      let tempList = this.pokemonList.filter(pokemon => pokemon.name.includes(value));      
      this.dataSource = new MatTableDataSource<Pokemon>(tempList);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      return tempOptions;
    } else {
      this.dataSource = new MatTableDataSource<Pokemon>(this.pokemonList);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      return this.options;    
    }    
  }

  private pokemonCount(letter: string) {
    const index = this.firstLetter.findIndex(x => x.letter === letter);
    this.firstLetter[index].count = this.firstLetter[index].count + 1;
  }

}
