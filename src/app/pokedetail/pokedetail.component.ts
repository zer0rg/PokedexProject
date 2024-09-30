import { Component, Input } from '@angular/core';
import { PokeData } from '../interfaces/poke.interface';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../pipe/capitalize.pipe';

@Component({
  selector: 'app-pokedetail',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './pokedetail.component.html',
  styleUrl: './pokedetail.component.css'
})
export class PokedetailComponent {

  @Input() pokemon?: PokeData;
  @Input() pokemonId?: string;

}
