import { Component, Input, SimpleChanges } from '@angular/core';
import { PokeData, Results } from '../interfaces/poke.interface';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { OnChanges } from '@angular/core';
import { PokeCardComponent } from '../poke-card/poke-card.component';
import { PokemonService } from '../services/pokemon.service';
import { Router, RouterEvent } from '@angular/router';
import { PokedetailComponent } from '../pokedetail/pokedetail.component';




@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [CommonModule, PokeCardComponent, PokedetailComponent],  
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})

export class PokeListComponent {

constructor(private _pokemonService: PokemonService, private router: Router) { }
idSeleccionada?:string
pokemonSeleccionado?:PokeData;
pokemonSeleccionadoTool: boolean = false;
dispvar:string = 'disp-none';
@Input() listaPokemon: Results[] = [];
dispvarTurnBool:boolean = false;

listasPokemon: Results[] = [];

dispvarTurn(){
  this.dispvarTurnBool = !this.dispvarTurnBool;
  if(this.dispvarTurnBool){
  this.dispvar = 'disp-flex';}
  else{
    this.dispvar = 'disp-none';
  }
}




async tarjetaClickeada(e:string){
  this.pokemonSeleccionado = await this._pokemonService.getPokemonbyId(e);
  this.dispvarTurnBool = true;

  this.dispvar='disp-flex';
;
}

linkToRoute(){
  this.router.navigate(['/test'])
}

onScroll(e:any){
console.log(e)
}



}
