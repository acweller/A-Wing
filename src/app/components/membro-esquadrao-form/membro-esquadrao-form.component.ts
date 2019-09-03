import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MembroEsquadrao } from '../../models/membroEsquadrao';
import { MembroEsquadraoService } from '../../services/membro-esquadrao.service';

@Component({
  selector: 'app-membro-esquadrao-form',
  templateUrl: './membro-esquadrao-form.component.html',
  styleUrls: ['./membro-esquadrao-form.component.css']
})

export class MembroEsquadraoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  MembroEsquadrao: MembroEsquadrao = {
    cod_personagem: 0,
    cod_esquadrao: 0,
    descricao: '',
    datahora: new Date()
  };

  edit = false;

  constructor(private membroEsquadraoService: MembroEsquadraoService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params  = this.activeRoute.snapshot.params;
    if (params.id) {
      this.membroEsquadraoService.getMembroEsquadrao(params.id).subscribe(
        res => {
          console.log(res);
          this.MembroEsquadrao = res;
          this.edit = true;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  saveMembroEsquadrao() {
    delete this.MembroEsquadrao.datahora;
    // delete this.MembroEsquadrao.cod_esquadrao;
    this.membroEsquadraoService.saveMembroEsquadrao(this.MembroEsquadrao)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/MembroEsquadrao']);
      },
      err => console.error(err)
    );
  }

  updateMembroEsquadrao() {
    delete this.MembroEsquadrao.datahora;
    this.membroEsquadraoService.updateMembroEsquadrao(this.MembroEsquadrao)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/MembroEsquadrao']);
        },
        err => console.log(err)
      );
  }

}
