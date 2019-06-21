import { Component, OnInit, HostBinding } from '@angular/core';
import { Squad } from 'src/app/models/squad';
import { ActivatedRoute, Router } from '@angular/router';
import { SquadService } from 'src/app/services/squad.service';

@Component({
  selector: 'app-squad-form',
  templateUrl: './squad-form.component.html',
  styleUrls: ['./squad-form.component.css']
})
export class SquadFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  squad: Squad = {
    cod_esquadrao: 0,
    nom_esquadrao: '',
    descricao: '',
    datahora: new Date()
  };

  edit: boolean = false;

  constructor(private squadServices: SquadService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activedRoute.snapshot.params;
    if (params.cod_esquadrao) {
      console.log(params.cod_esquadrao)
      this.squadServices.getSquad(params.cod_esquadrao)
        .subscribe(
          res => {
            console.log(res);
            this.squad = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

  }

  saveNewSquad(){
    delete this.squad.cod_esquadrao;
    delete this.squad.datahora;
    this.squadServices.saveSquad(this.squad)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/squad']);
        },
        err => console.log(err)
      )
  }
  updateSquad() {
    delete this.squad.datahora;
    this.squadServices.updateSquad(this.squad.cod_esquadrao, this.squad)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/squad']);
        },
        err => console.error(err)
      )
  }
}
