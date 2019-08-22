import {Request, Response } from 'express';

import pola from '../database';
import { text } from 'body-parser';



class SquadController {

   public async create(req: Request , res: Response): Promise<void> {
      await pola.query('INSERT INTO esquadrao set ?', [req.body]);
      res.json({
         message: 'Squad saved!!!' });
        
   }
   public async update (req: Request , res: Response): Promise<void>{
     const { id } = req.params;
     await pola.query('UPDATE INTO esquadrao set ?', [req.body]);
      
      res.json({
          message: 'Updating squad' });
   }

   
   public async getOne(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const squad = await pola.query('SELECT * FROM esquadrao WHERE cod_esquadrao = ?', [id]);
      console.log(squad);
      if (squad.length > 0) {
         return res.json(squad[0]);
      }
      res.status(404).json({ text: 'squad nao existe' });
   }

   public async list(req: Request, res: Response) {
      const squad = await pola.query('SELECT * FROM esquadrao');
      res.json(squad);
   }
   public async delete(req: Request , res: Response): Promise<any>{
      const { id } = req.params;
      const squad = await pola.query('DELETE FROM esquadrao WHERE cod_esquadrao = ?', [id]);
      console.log(squad);
      res.json({ message: 'Squad deleted' });
   }

}

const squadController = new SquadController();
export default squadController;