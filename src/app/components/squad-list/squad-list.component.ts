import { Component, OnInit, HostBinding } from '@angular/core';
import { SquadService } from '../../services/squad.service';
import { Squad } from 'src/app/models/squad';

@Component({
  selector: 'app-squad-list',
  templateUrl: './squad-list.component.html',
  styleUrls: ['./squad-list.component.css']
})
export class SquadListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  squads: any = [];
  constructor(private squadService: SquadService) { }

  ngOnInit() {
  this.getSquads();
  }

  getSquads() {
    this.squadService.getSquads().subscribe(
      res => {
        this.squads = res;
      },
      err => console.error(err)
    );
  }
  deleteSquad(codEsquadrao: string) {
    this.squadService.deleteSquad(codEsquadrao)
      .subscribe(
        res => {
          console.log(res);
          this.getSquads();

        },
        err => console.error(err)
      );
  }

  }
