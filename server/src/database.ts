import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
   .then(connection => {
      pool.releaseConnection(connection);
      console.log('Está conectado ao BD: ' + keys.database.database);
   });

export default pool;

export const poll = pool;
