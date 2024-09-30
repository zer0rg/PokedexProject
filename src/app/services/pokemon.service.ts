import { Injectable } from '@angular/core';
import { Results } from '../interfaces/poke.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  public loaded: boolean = false;
  getLoaded(){
    return this.loaded;
  }

 async getPokemonsbyPage(page:number,limit:number = 40): Promise<Results[]>{

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    const json = await res.json();
    if(json.results.length > 0) return json.results ;
    this.loaded = true;    
    return [];
  }

  async getPokemonbyId(id: string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await res.json();
    if(json) return json
    return ''


  }
}
