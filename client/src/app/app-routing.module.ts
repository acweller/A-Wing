import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MembroEsquadraoListComponent} from  './components/membro-esquadrao-list/membro-esquadrao-list.component';
import {MembroEsquadraoFormComponent} from './components/membro-esquadrao-form/membro-esquadrao-form.component'
import { StarshiptypeListComponent } from './components/starshiptype-list/starshiptype-list.component';
import { StarshiptypeFormComponent } from './components/starshiptype-form/starshiptype-form.component';
import { SquadListComponent } from './components/squad-list/squad-list.component';
import { SquadFormComponent } from './components/squad-form/squad-form.component';
import { PersonagemListComponent } from './components/personagem-list/personagem-list.component';
import { PersonagemFormComponent } from './components/personagem-form/personagem-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/starshiptype',
    pathMatch: 'full'
  },
  {
    path: 'starshiptype',
    component:  StarshiptypeListComponent
  },
  {
    path: 'starshiptype/add',
    component: StarshiptypeFormComponent
  },
  {
    path: 'starshiptype/edit/:id',
    component: StarshiptypeFormComponent
  },
  {
    path: 'MembroEsquadrao',
    component:  MembroEsquadraoListComponent
  },
  {
    path: 'MembroEsquadrao/add',
    component: MembroEsquadraoFormComponent
  },
  {
    path: 'squad',
    component: SquadListComponent
  },
  {
    path: 'squad/add',
    component: SquadFormComponent
  },
  {
    path: 'squad/edit/:cod_esquadrao',
    component: SquadFormComponent
  },
  {
    path: 'personagens',
    component: PersonagemListComponent
  },
  {
    path: 'personagens/add',
    component: PersonagemFormComponent
  },
  {
    path: 'personagens/editar/:cod_Personagem',
    component: PersonagemFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
