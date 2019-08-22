import { Router } from 'express'; 
import { MembroController } from '../controllers/MembroEsquadraoController';

class MembroEsquadraoRoutes {

   public router: Router = Router();

   constructor(){
      this.config();
   }

   config(): void{
      this.router.get('/',MembroController.list);
      this.router.get('/:id',MembroController.getOne);
      this.router.post('/', MembroController.create);
      this.router.delete('/:id',MembroController.delete)   
      this.router.put('/:id',MembroController.update)   
      //
   }


}
const MembroRoutes = new MembroEsquadraoRoutes();
export default MembroRoutes.router;


