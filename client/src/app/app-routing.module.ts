import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MembroEsquadraoListComponent} from  './components/membro-esquadrao-list/membro-esquadrao-list.component';
import {MembroEsquadraoFormComponent} from './components/membro-esquadrao-form/membro-esquadrao-form.component'

import { StarshiptypeListComponent } from './components/starshiptype-list/starshiptype-list.component';
import { StarshiptypeFormComponent } from './components/starshiptype-form/starshiptype-form.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
