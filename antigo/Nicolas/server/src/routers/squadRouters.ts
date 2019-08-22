import {Router} from 'express';

import squadController from '../controllers/squadController';



class SquadRoutes {  

public router: Router = Router ();

constructor(){
    this.config();
}


config():void {
    this.router.post('/', squadController.create);
    this.router.delete('/:id', squadController.delete);
    this.router.put('/:id', squadController.update);
    this.router.get('/',squadController.list);
    this.router.get('/:id',squadController.getOne);
    }

}
const squadRoutes = new SquadRoutes();
export default squadRoutes.router;