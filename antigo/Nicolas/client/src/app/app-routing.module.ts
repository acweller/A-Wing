import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquadListComponent } from './components/squad-list/squad-list.component';
import { SquadFormComponent } from './components/squad-form/squad-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/squad',
    pathMatch: 'full'
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
