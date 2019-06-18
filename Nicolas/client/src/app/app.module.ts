import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SquadFormComponent } from './components/squad-form/squad-form.component';
import { SquadListComponent } from './components/squad-list/squad-list.component';

import {SquadService} from './services/squad.service';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SquadFormComponent,
    SquadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SquadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
