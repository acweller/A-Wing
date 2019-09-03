import { Component, OnInit, HostBinding } from '@angular/core';
import { MembroEsquadraoService } from '../../services/membro-esquadrao.service';
@Component({
  selector: 'app-membro-esquadrao-list',
  templateUrl: './membro-esquadrao-list.component.html',
  styleUrls: ['./membro-esquadrao-list.component.css']
})
export class MembroEsquadraoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  membrosEsquadrao: any = [];
  constructor(private membrosEsquadraoService: MembroEsquadraoService) {  }

  ngOnInit() {
    this.getMembroEsquadrao();
  }
  getMembroEsquadrao() {
    this.membrosEsquadraoService.getMembrosEsquadrao().subscribe(
      res => {
        this.membrosEsquadrao = res;
      },
      err => console.error(err)
    );
  }
  excluirMembroEsquadrao(codPersonagem: string, codEsquadrao: string) {
    console.log('deletando membro esq component');
    this.membrosEsquadraoService.deleteMembroEsquadrao(codPersonagem, codEsquadrao).subscribe(
      res => {
        console.log('OK');
        console.log(res);
        this.getMembroEsquadrao();
      },
      err => {
        console.log('Erro');
        console.log(err);
      }
    );
  }

}
