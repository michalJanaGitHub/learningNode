const sqlDB = require('mssql');
const settings = require('../settings');
const dbConfig = settings.dbConfig;

exports.executeSQL = (sql, callback) => {

  const conn = new sqlDB.ConnectionPool(dbConfig);

  conn.connect()
    .then(() => {
      const req = new sqlDB.Request(conn);
      req.query(sql)
        .then((recordSet) => { 
          callback(recordSet);
        })
        .catch((err) => { 
          console.log(err);
          callback(null, err);          
        })
      ;     
    })
    .catch( (err) => {
      console.log(err);
      callback(null, err);
    });

};

