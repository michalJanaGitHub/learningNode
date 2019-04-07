const db = require('../core/db.js');
const httpMssgs = require('../core/httpMssgs.js');
const util = require('util');
const SETtings = require('../SETtings.js');




exports.getList = (req, res) => {
  let sql = "SELECT * \nFROM aLearning.Employees";
  if (SETtings.debugMode) console.log(sql);
  db.executeSQL(sql, (data, err) => {
    if (err) {
      httpMssgs.show500(req,res,err);
    }
    else {
    }    
      httpMssgs.sendJSON(req,res,data);
  });
};

exports.get = (req, res, empNO) => {
  
  let sql = `SELECT * \nFROM aLearning.Employees \nWHERE ID = ${empNO}`;
  if (SETtings.debugMode) console.log(sql);

  
  db.executeSQL(sql, (data, err) => {
    if (err) {
      httpMssgs.show500(req,res,err);
    }
    else {
    }
      httpMssgs.sendJSON(req,res,data);
  });
};

exports.add = (req, res, reqBody) => {
 try {
    if (!reqBody) throw new Error('Input not valid');
    let data = JSON.parse(reqBody);
    if (data) {
      let sql =
        `INSERT INTO aLearning.Employees (
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
      if (SETtings.debugMode) console.log(sql);
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

exports.update = (req, res, reqBody) => {
  try {
    if (!reqBody) throw new Error('Input not valid');
    let data = JSON.parse(reqBody);
    if (data) {

      if (!data.ID) throw new Error('No employee ID');
    
      let sql = 'UPDATE aLearning.Employees \nSET';
      
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
      if (SETtings.debugMode) console.log(sql);

      sql = sql.slice(0, -1); // remove last comma
      sql += `\n WHERE ID = ${data.ID}`;
      

      if (SETtings.debugMode) console.log(sql);
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

exports.delete = (req, res, reqBody) => {
  try {
    if (!reqBody) throw new Error('Input not valid');
    let data = JSON.parse(reqBody);
    if (data) {

      if (!data.ID) throw new Error('No employee ID');
    
      let sql = 
        `DELETE
        FROM aLearning.Employees
        WHERE ID = ${data.ID}`;
     

      if (SETtings.debugMode) console.log(sql);
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