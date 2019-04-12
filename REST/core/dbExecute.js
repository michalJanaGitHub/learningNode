const sqlDB = require('mssql');
const settings = require('../../settings.js');
const dbConfig = settings.dbConfig;
const logger = require('../../logger.js');


exports.executeRequest = (requestHeader,  requestBody, callBack) => {
  const conn = new sqlDB.ConnectionPool(dbConfig);

  conn.connect()
    .then(() => {
      const req = new sqlDB.Request(conn);
      
      req.input('p_RequestHeader', sqlDB.NVarChar(64000), JSON.stringify(requestHeader));
      req.input('p_RequestBody', sqlDB.NVarChar(64000), JSON.stringify(requestBody));
      req.execute('app.p_ExecuteRequest')
        .then((result) => {
          console.log('Answer received:');
          console.log(JSON.stringify(result));
          callBack(result);
        })
        .catch((err) => {
          // console. log(err);
          callBack(null, err);          
        });
      console.log('execute request sent');

    })
    .catch( (err) => {
      // console.log(err);
      callBack(null, err);
    });

};

