import { Component, OnInit, HostBinding } from '@angular/core';

import { PersonagemService } from './../../services/personagem.service';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.css']
})
export class PersonagemListComponent implements OnInit {

  personagens: any = [];

  constructor(private personagemService: PersonagemService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit() {
    this.getPersonagens();
  }

  getPersonagens() {
    this.personagemService.getPersonagem().subscribe (
      res => {
        this.personagens = res;
      },
      err => console.error(err)
    );
  }

  deletePersonagem(codPersonagem: string) {
    this.personagemService.deletePersonagem(codPersonagem)
    .subscribe(
      res => {
        console.log(res);
        this.getPersonagens();
      },
      err => console.log(err)
    );
  }
}
