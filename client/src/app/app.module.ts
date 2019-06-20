import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MembroEsquadraoListComponent } from './components/membro-esquadrao-list/membro-esquadrao-list.component';
import { MembroEsquadraoFormComponent } from './components/membro-esquadrao-form/membro-esquadrao-form.component';
import { StarshiptypeListComponent } from './components/starshiptype-list/starshiptype-list.component';
import { StarshiptypeFormComponent } from './components/starshiptype-form/starshiptype-form.component'

import { MembroEsquadraoService }  from './services/membro-esquadrao.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MembroEsquadraoListComponent,
    MembroEsquadraoFormComponent,
    StarshiptypeListComponent,
    StarshiptypeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MembroEsquadraoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
