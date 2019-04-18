import {Request, Response} from 'express';

import pool from '../database';

class StarshipTypeController {
  public async list(req: Request, res: Response) {
    const types = await pool.query('SELECT * FROM starship_type');
    res.json(types);
  }

  public async getOne (req: Request, res: Response): Promise<any>{
    const { id } = req.params;
    const types = await pool.query('SELECT * FROM starship_type WHERE cod_type = ?', [id]);
    if (types.length > 0) {
      console.log(types);
      return res.json(types[0]);
    }
    res.status(404).json({text: "O tipo de nave não existe."});
  }

  public async create (req: Request, res: Response): Promise<void> {
    //console.log(req.body);
    await pool.query('INSERT INTO starship_type set ?', [req.body]);
    res.json({message: 'O tipo de nave foi inserido.'});
  }

  public async update (req: Request, res: Response): Promise<void>{
    const { id } = req.params;
    await pool.query('UPDATE starship_type set ? WHERE cod_type = ?', [req.body, id]);
    res.json({text: "O tipo de nave foi atualizado."});
  }

  public async delete (req: Request, res: Response): Promise<void>{
    const { id } = req.params;
    await pool.query('DELETE FROM starship_type WHERE cod_type = ?', [id]);
    res.json({text: 'O tipo de nave '+ req.params.id + ' foi excluído.'});
  }
}

export const starshipTypeController = new StarshipTypeController();
