const db = require('../core/dbQuery.js');
const httpMssgs = require('../core/httpMssgs.js');
const util = require('util');
const settings = require('../settings.js');



let getList = (req, res) => {
  let sql = "SELECT * \nFROM Employees.t_Employees";
  if (settings.debugMode) console.log(sql);
  db.executeSQL(sql, (data, err) => {
    if (err) {
      httpMssgs.show500(req,res,err);
    }
    else {
      httpMssgs.sendJSON(req,res,data);
    }    
      
  });
};
let get = (req, res, empNO) => {
  
  let sql = `SELECT * \nFROM Employees.t_Employees \nWHERE ID = ${empNO}`;
  if (settings.debugMode) console.log(sql);

  
  db.executeSQL(sql, (data, err) => {
    if (err) {
      httpMssgs.show500(req,res,err);
    }
    else {
      httpMssgs.sendJSON(req,res,data);
    }
      
  });
};
let add = (req, res, reqBody) => {
 try {
    if (!reqBody) throw new Error('Input not valid');
    let data = JSON.parse(reqBody);
    if (data) {
      let sql =
        `INSERT INTO Employees.t_Employees (
             Number
           , Name
           , Salary
           , DepartmentID
        )
        VALUES`;
      let listOfValues =
        util.format("('%s', '%s', %d, %d)", data.Number, data.Name, data.Salary, data.DepartmentID
      );
      sql += listOfValues;
      if (settings.debugMode) console.log(sql);
      db.executeSQL(sql, (data, err) => {
        if (err) {
          httpMssgs.show500(req,res,err);
        }
        else {
        }    
          httpMssgs.send200(req,res);
      });     
    }
    else throw new Error('Input not valid');
  }
  catch(ex) {
    httpMssgs.show500(req, res, ex);
  } 

};
let update = (req, res, reqBody) => {
  try {
    if (!reqBody) throw new Error('Input not valid');
    let data = JSON.parse(reqBody);
    if (data) {

      if (!data.ID) throw new Error('No employee ID');
    
      let sql = 'UPDATE Employees.t_Employees \nSET';
      
      let isDataProvided = false;
      
      if (data.Number) {
        sql += `\n Number = '${data.Number}',`;
        isDataProvided = true;}
      if (data.Name) {
        sql += `\n Name = '${data.Name}',`;
        isDataProvided = true;}      
      if (data.Salary) {
        sql += `\n Salary = ${data.Salary},`;
        isDataProvided = true;}      
      if (data.DepartmentID) {
        sql += `\n DepartmentID = ${data.DepartmentID},`;
        isDataProvided = true;
      }

      if (!isDataProvided) throw new Error('No data to update');
      if (settings.debugMode) console.log(sql);

      sql = sql.slice(0, -1); // remove last comma
      sql += `\n WHERE ID = ${data.ID}`;
      

      if (settings.debugMode) console.log(sql);
      db.executeSQL(sql, (data, err) => {
        if (err) {
          httpMssgs.show500(req,res,err);
        }
        else {
        }    
          httpMssgs.send200(req,res);
      });     
    }
    else throw new Error('Input not valid');
  }
  catch(ex) {
    httpMssgs.show500(req, res, ex);
  } 
};
let del = (req, res, reqBody) => {
  try {
    if (!reqBody) throw new Error('Input not valid');
    let data = JSON.parse(reqBody);
    if (data) {

      if (!data.ID) throw new Error('No employee ID');
    
      let sql = 
        `DELETE
        FROM Employees.t_Employees
        WHERE ID = ${data.ID}`;
     

      if (settings.debugMode) console.log(sql);
      db.executeSQL(sql, (data, err) => {
        if (err) {
          httpMssgs.show500(req,res,err);
        }
        else {
        }    
          httpMssgs.send200(req,res);
      });     
    }
    else throw new Error('Input not valid');
  }
  catch(ex) {
    httpMssgs.show500(req, res, ex);
  } 
};

exports.respondToGet = (req, res) => {  // select
  if (req.url === '/employees') {
    getList(req, res);
  }
  else {
    let empNoPattern = "[0-9]+";
    let regExp = new RegExp("/employees/" + empNoPattern);
    if (regExp.test(req.url)) {
      regExp = new RegExp(empNoPattern);
      let empNo = regExp.exec(req.url);
      get(req, res, empNo);      
    }
    else {
      httpMssgs.show404(req, res);
    }    
  }
};
exports.respondToPOST = (req, res) => {  // insert
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
    if (reqBody.length > 1e7) { //10MB
      httpMssgs.show413(req, res);  // too large
    }
  });

  req.on('end', () => {
    add(req, res, reqBody);
  });
};
exports.respondToPUT = (req, res) => {  // update
let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
    if (reqBody.length > 1e7) { //10MB
      httpMssgs.show413(req, res);  // too large
    }
  });

  req.on('end', () => {
    update(req, res, reqBody);
  });
};
exports.respondToDELETE = (req, res) => { // delete
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
    if (reqBody.length > 1e7) { //10MB
      httpMssgs.show413(req, res);  // too large
    }
  });

  req.on('end', () => {
    del(req, res, reqBody);
  });
};