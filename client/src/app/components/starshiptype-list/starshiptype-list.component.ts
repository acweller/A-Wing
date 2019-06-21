import { Component, OnInit, HostBinding } from '@angular/core';

import { StarshiptypesService } from "../../services/starshiptypes.service";

@Component({
  selector: 'app-starshiptype-list',
  templateUrl: './starshiptype-list.component.html',
  styleUrls: ['./starshiptype-list.component.css']
})
export class StarshiptypeListComponent implements OnInit {

  starshiptypes: any = [];

  constructor(private starshiptypesService: StarshiptypesService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit() {
    this.getStarshiptypes();
  }

  getStarshiptypes(){
    this.starshiptypesService.getStarshiptypes().subscribe(
      res => {
        // console.log("===>> getStarshiptypes");
        this.starshiptypes = res;
      },  // Resposta
      // err => console.log("===>> Erro getStarshiptypes")
      err => console.error(err) // error
    )
  }

  deleteStarshiptype(id: string){
    this.starshiptypesService.deleteStarshiptype(id).subscribe(
      res => {
        console.log(res);
        this.getStarshiptypes();
      },
      err => console.log(err)
    )
  }

}
