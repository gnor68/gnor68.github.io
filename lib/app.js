const express = require("express");
const mysql = require("mysql");
//const lodash=require("lodash");
//const jsonServer=require("json-server");

let DBConn = mysql.createConnection({
  host: "localhost",
  user: "crs",
  password: "szivacs",
  database: "abc",

})
DBConn.connect(function (err) {
  if (err) throw err;
  DBConn.query("SELECT * from foglalasok", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  
    });
});




