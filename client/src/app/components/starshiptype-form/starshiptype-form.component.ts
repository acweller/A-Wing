import { Component, OnInit, HostBinding } from '@angular/core';
import { starshiptype } from 'src/app/models/starshiptype';
import { ActivatedRoute, Router } from "@angular/router";

import { StarshiptypesService } from 'src/app/services/starshiptypes.service';

@Component({
  selector: 'app-starshiptype-form',
  templateUrl: './starshiptype-form.component.html',
  styleUrls: ['./starshiptype-form.component.css']
})
export class StarshiptypeFormComponent implements OnInit {

  @HostBinding('class') classes = "row";

  starshiptype: starshiptype = {
    cod_type: 0,
    nom_type: '',
    descricao: '',
    datahora: new Date()
  };

  edit: boolean = false;

  constructor(private typeService: StarshiptypesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params  = this.activeRoute.snapshot.params;
    if (params.id){
      this.typeService.getStarshiptype(params.id).subscribe(
        res => {
          console.log(res);
          this.starshiptype = res;
          this.edit = true;
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  saveStarshiptype(){
    console.log(this.starshiptype);
    delete this.starshiptype.datahora;
    delete this.starshiptype.cod_type;
    this.typeService.saveStarshiptype(this.starshiptype)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/starshiptype'])
        },
        err => console.error(err)
      )
  }

  updateStarshiptype(){
    //console.log(this.game)
    delete this.starshiptype.datahora;
    this.typeService.updateStarshiptype(this.starshiptype.cod_type, this.starshiptype)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/starshiptype'])
        },
        err => console.log(err)
      )
  }

}
