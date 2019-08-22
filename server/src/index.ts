import express, { Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import starshipTypeRoutes from './routes/starshipTypeRoutes';
import MembroRoutes from './routes/MembroEsquadraoRoutes';
import squadRoutes from './routes/squadRouters';
import personagemRoutes from './routes/personagemRoutes';

class Server {

  public app: Application;

  constructor(){
    this.app = express();
    this.config();
    this.route();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
  }

  route(): void {
    this.app.use('/', indexRoutes);
    this.app.use('/api/MembroEsquadrao', MembroRoutes);
    this.app.use('/api/starshiptype', starshipTypeRoutes);
    this.app.use('/api/squad', squadRoutes);
    this.app.use('/api/personagens', personagemRoutes);
  }

  start(): void{
     this.app.listen(this.app.get('port'), () => {
         console.log('Servidor iniciado na porta:', this.app.get('port'));
       });
  }
}

const server = new Server();
server.start();
