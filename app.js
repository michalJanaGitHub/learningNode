let sql = require("mssql");

let dbConfig = {
  server: "localhost\\MSSQLSERVER",
  database: "AdventureWorks2017",
  user: "mj",
  password: "mj",
  port:1433,

};

// let dbConfig = {
//   connectionString: 'Driver=SQL Server Native Client 11.0;Server=DESKTOP-LRG9S00;Database=AdventureWorks2017;Trusted_Connection=true',
// };

let getPerson = () => {
  let conn = new sql.ConnectionPool(dbConfig);
  let req = new sql.Request(conn);

  conn.connect((error) => {
    if (error) {
      console.log(error);
      return;
    } 
    req.query("SELECT TOP 10 * FROM Person.Person", (error, recordSet) => {
      if (error) {
        console.log(error);        
      }
      else {
        console.log(recordSet);
      }
      conn.close(); // dulezite!
    });
  });



};


getPerson();
