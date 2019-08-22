import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembroEsquadraoListComponent} from  './components/membro-esquadrao-list/membro-esquadrao-list.component';
import {MembroEsquadraoFormComponent} from './components/membro-esquadrao-form/membro-esquadrao-form.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/MembroEsquadrao',
    pathMatch: 'full'
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
