import { Request, Response } from 'express';

class IndexController {

   public index(req: Request, res: Response) {
      res.json({
      tex: 'The API: /api'
      })
   }

}

export const indexController = new IndexController();