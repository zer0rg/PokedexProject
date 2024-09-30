import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokedetailComponent } from './pokedetail/pokedetail.component';
export const routes: Routes = [
    {path: '', component: PokeListComponent},
    {path: 'pokemon', component: PokedetailComponent} ,
];
