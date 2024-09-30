import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Results } from './interfaces/poke.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokeListComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pokedex';
inputValue: any;

  
  constructor(private _pokemonService: PokemonService) { }
  

  listaPokemon: Results[] = [];
  listaFiltrada: Results[] = [];

  pagina:number = 0;
  ngOnInit(): void {
    this.crearLista();
  }
  
  async crearLista(){
   this.listaPokemon = [...this.listaPokemon, ...await this._pokemonService.getPokemonsbyPage(this.pagina)];
   this.listaFiltrada = this.listaPokemon.filter(pokemon => pokemon.name.includes(''.toLocaleLowerCase()));

   this.pagina++
  }

  

  async onInputChange(input: string){
    this.listaFiltrada = this.listaPokemon.filter(pokemon => pokemon.name.includes(input.toLocaleLowerCase()));
    console.log(this.listaPokemon.filter(pokemon => pokemon.name.includes(input.toLocaleLowerCase())));
    }
  onScroll(e:any){
    console.log(e)
  }

}
