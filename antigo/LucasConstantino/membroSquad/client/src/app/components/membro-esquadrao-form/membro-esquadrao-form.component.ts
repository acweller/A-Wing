import { Component, OnInit, HostBinding } from '@angular/core';
import {membroEsquadrao} from '../../models/membroEsquadrao';
import {MembroEsquadraoService} from '../../services/membro-esquadrao.service'
@Component({
  selector: 'app-membro-esquadrao-form',
  templateUrl: './membro-esquadrao-form.component.html',
  styleUrls: ['./membro-esquadrao-form.component.css']
})

export class MembroEsquadraoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  MembroEsquadrao : membroEsquadrao = {
    cod_personagem:null,
    cod_esquadrao : null,
    descricao : "",
    datahora: new Date()
  }

  constructor(private membroEsquadraoService: MembroEsquadraoService) { }

  ngOnInit() {
  }

  saveMembroEsquadrao(){
    delete this.MembroEsquadrao.datahora;
    //delete this.MembroEsquadrao.cod_esquadrao;
    this.membroEsquadraoService.saveMembroEsquadrao(this.MembroEsquadrao)  
    .subscribe(
      res=>{
        console.log(res);
      },
      err => console.error(err)
    )
  }
}
