import {Router} from 'express';
import {starshipTypeController} from '../controllers/starshipTypeController';

class StarshipTypeRoutes {
  public router : Router = Router();

  constructor(){
    this.config();
  }

  config(): void{
    this.router.get('/', starshipTypeController.list);
    this.router.get('/:id', starshipTypeController.getOne);
    this.router.post('/', starshipTypeController.create);
    this.router.put('/:id', starshipTypeController.update);
    this.router.delete('/:id', starshipTypeController.delete);
  }
}

const starshipTypeRoutes = new StarshipTypeRoutes();
export default starshipTypeRoutes.router;
