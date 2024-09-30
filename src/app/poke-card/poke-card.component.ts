import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Results } from '../interfaces/poke.interface';
import { CapitalizePipe } from '../pipe/capitalize.pipe';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [CapitalizePipe],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css'
})
export class PokeCardComponent implements OnChanges {

  constructor(private _pokemonService: PokemonService) { }

ngOnChanges(changes: SimpleChanges): void {
  this.extraerInfo();
}
@Input()  pokemon?: Results;
@Output() clickeado = new EventEmitter<string>();

id:string = '0'


extraerInfo(){
  if(this.pokemon){
    this.id = this.pokemon.url.substring(34, this.pokemon.url.length-1);
  }


}






}
