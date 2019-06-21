import { Request, Response } from 'express';

import { poll } from '../database';

class MembroEsquadraoController {

   public async getOne(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      var str = id.split(',',2);

      const membro_esquadrao = await poll.query('SELECT * FROM membro_esquadrao WHERE cod_personagem =?',str[0]+'and cod_esquadrao = ?'+str[1]);
      console.log(membro_esquadrao);
      if (membro_esquadrao.length > 0) {
         return res.json(membro_esquadrao[0]);
      }
      res.status(404).json({ text: 'damnn u nao existe' });
   }

   public async list(req: Request, res: Response) {
      const membro_esquadrao = await poll.query('SELECT * FROM membro_esquadrao');
      res.json(membro_esquadrao);
   }

   public async create(req: Request , res: Response): Promise<void> {
      await poll.query('INSERT INTO membro_esquadrao set ?', [req.body]);
      res.json({
         message: 'Membro Esquadrao Criado!!!' });
   }

   public async delete(req: Request , res: Response): Promise<any>{
      const { id } = req.params;
      var str = id.split(',',2);

      // const membro_esquadrao = await poll.query('DELETE FROM membro_esquadrao WHERE cod_personagem =?',str[0]+'and cod_esquadrao = ?'+str[1]);
      const membro_esquadrao = await poll.query('DELETE FROM membro_esquadrao WHERE cod_personagem = ? and cod_esquadrao = ?', [str[0], str[1]]);
      console.log(membro_esquadrao + " isso foi deletado.");
      res.json({ message: 'Membro Esquadrao Deletado '+id.split(',') });
   }

   public async update (req: Request, res: Response): Promise<void>{
     const { id } = req.params;
     var str = id.split(',',2);

     await poll.query('UPDATE membro_esquadrao set ? WHERE cod_personagem = ? and cod_esquadrao = ?', [req.body, str[0], str[1]]);
     res.json({text: 'Membro Esquadrao Atualizado ' + id.split(',') });
   }

}

export const MembroController = new MembroEsquadraoController();
//export default gamesController;
