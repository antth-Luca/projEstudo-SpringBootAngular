import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { CidadeListaComponent } from './cadastros/cidade-lista/cidade-lista.component';
import { CidadeFormComponent } from './cadastros/cidade-form/cidade-form.component';

export const routes: Routes = [
    { path : '', redirectTo: '/home', pathMatch: 'full'},
    { path : 'home', component: HomeComponent },
    { path : 'login', component: LoginComponent },
    { path : 'lista-cidades', component: CidadeListaComponent },
    { path : 'nova-cidade', component: CidadeFormComponent },
];
