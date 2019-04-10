const sqlDB = require('mssql');
const settings = require('../settings');
const dbConfig = settings.dbConfig;
const user = require('./user.js');




exports.executeRequest = (requestHeader,  requestBody, callBack) => {
  const userName = user.userName;
  const appName = settings.appName;


  const conn = new sqlDB.ConnectionPool(dbConfig);

  conn.connect()
    .then(() => {
      const req = new sqlDB.Request(conn);
      req.input('p_RequestHeader', sqlDB.NVarChar(64000), JSON.stringify(requestHeader));
      req.input('p_RequestBody', sqlDB.NVarChar(64000), JSON.stringify(requestBody));

      req.execute('app.p_ExecuteRequest')
        .then((result) => {   
          console.log(JSON.parse(result));
          callBack(result);
        })
        .catch((err) => {
          console. log(err);
          callBack(null, err);          
        });  
    })
    .catch( (err) => {
      console.log(err);
      callBack(null, err);
    });

};

