import { Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { SzobakComponent } from './szobak/szobak.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { RegisztracioComponent } from './regisztracio/regisztracio.component';
import { FoglalasComponent } from './foglalas/foglalas.component';
import { UjJelszoComponent } from './uj-jelszo/uj-jelszo.component';

export const routes: Routes = [
    {path: "" ,component:FooldalComponent},
    {path: "szoba" ,component:SzobakComponent},
    {path: "bejelentkezes" ,component:BejelentkezesComponent},
    {path: "regisztracio", component:RegisztracioComponent},
    {path: "foglalas", component:FoglalasComponent},
    {path: "uj_jelszo", component:UjJelszoComponent},

];
