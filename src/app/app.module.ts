import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MembroEsquadraoListComponent } from './components/membro-esquadrao-list/membro-esquadrao-list.component';
import { MembroEsquadraoFormComponent } from './components/membro-esquadrao-form/membro-esquadrao-form.component';
import { StarshiptypeListComponent } from './components/starshiptype-list/starshiptype-list.component';
import { StarshiptypeFormComponent } from './components/starshiptype-form/starshiptype-form.component'
import { SquadFormComponent } from './components/squad-form/squad-form.component';
import { SquadListComponent } from './components/squad-list/squad-list.component';
import { PersonagemFormComponent } from './components/personagem-form/personagem-form.component';
import { PersonagemListComponent } from './components/personagem-list/personagem-list.component';

import { MembroEsquadraoService }  from './services/membro-esquadrao.service';
import { StarshiptypesService }  from './services/starshiptypes.service';
import { SquadService } from './services/squad.service';
import { PersonagemService } from './services/personagem.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidebarComponent,
    MembroEsquadraoListComponent,
    MembroEsquadraoFormComponent,
    StarshiptypeListComponent,
    StarshiptypeFormComponent,
    SquadFormComponent,
    SquadListComponent,
    PersonagemFormComponent,
    PersonagemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MembroEsquadraoService,
    StarshiptypesService,
    SquadService,
    PersonagemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
