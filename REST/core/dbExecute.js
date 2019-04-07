const sqlDB = require('mssql');
const settings = require('../settings');
const dbConfig = settings.dbConfig;

exports.executeRequest = (Code, jsonBody, Description, callBack) => {

  const conn = new sqlDB.ConnectionPool(dbConfig);

  conn.connect()
    .then(() => {
      const req = new sqlDB.Request(conn);
      req.input('p_Code', sqlDB.VarChar(100), Code);
      req.input('p_Body', sqlDB.VarChar(65400), jsonBody);
      req.input('p_Description', sqlDB.VarChar(100), Description);

      req.execute('app.p_ExecuteRequest')
        .then((result) => {         
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

