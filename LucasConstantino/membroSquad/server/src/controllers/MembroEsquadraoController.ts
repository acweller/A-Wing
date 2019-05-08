import { Request, Response } from 'express';

import { pola } from '../database';

class MembroEsquadraoController {

   public async getOne(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const membro_esquadrao = await pola.query('SELECT * FROM membro_esquadrao WHERE cod_esquadrão = ?', [id]);
      console.log(membro_esquadrao);
      if (membro_esquadrao.length > 0) {
         return res.json(membro_esquadrao[0]);
      }
      res.status(404).json({ text: 'damnn u nao existe' });
   }

   public async list(req: Request, res: Response) {
      const membro_esquadrao = await pola.query('SELECT * FROM membro_esquadrao');
      res.json(membro_esquadrao);
   }

   public async create(req: Request , res: Response): Promise<void> {
      await pola.query('INSERT INTO membro_esquadrao set ?', [req.body]);
      res.json({
         message: 'Membro Esquadrao saved!!!' });
   }

   public async delete(req: Request , res: Response): Promise<any>{
      const { id } = req.params;
      const membro_esquadrao = await pola.query('DELETE FROM membro_esquadrao WHERE cod_esquadrão = ?', [id]);
      console.log(membro_esquadrao);
      res.json({ message: 'Membro Esquadrao deleted' });
   }

   public update (req: Request , res: Response){
      res.json({
         text: 'Updating Membro Esquadrao: ' + req.params.id });
   }
}

export const MembroController = new MembroEsquadraoController();
//export default gamesController; 
