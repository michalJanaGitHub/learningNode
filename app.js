const sql = require("mssql");

const dbConfig = {
  server: "localhost\\MSSQLSERVER",
  database: "AdventureWorks2017",
  user: "mj",
  password: "mj",
  // port:1433,
};

// let dbConfig = {
//   connectionString: 'Driver=SQL Server Native Client 11.0;Server=DESKTOP-LRG9S00;Database=AdventureWorks2017;Trusted_Connection=true',
// };

let getPerson = () => {
  const conn = new sql.ConnectionPool(dbConfig);

  conn.connect()  // asynchronous!
  .then(() => { //try
    const req = new sql.Request(conn);

    req.query("SELECT TOP 1 * FROM Person.Person")
    .then((recordSet) => {
      console.log("\nSql response start:\n");
      console.log(recordSet);
      console.log("\nSql response end.\n");
      conn.close(); // dulezite!
    })
    .catch((err) => {
        console.log(err);
        conn.close(); // dulezite!
    });    
  })
  .catch( (err) => { //catch
    console.log(err);
  });
};

// prvni jednoducha moznost
let getPerson0 = () => {
  const conn = new sql.ConnectionPool(dbConfig);
  const req = new sql.Request(conn);

   conn.connect((err) => {  //synchronous
    if (error) {
      console.log(err);
      return;
    } 
    req.query("SELECT TOP 1 * FROM Person.Person", (error, recordSet) => {
      if (error) {
        console.log(err);        
      }
      else {
        console.log("\nSql response start:\n");
        console.log(recordSet);
        console.log("\nSql response end.\n");
      }
      conn.close(); // dulezite!
    });
  });
};




getPerson();
