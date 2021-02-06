// var mysql = require('mysql');
// var db_info = {
//   host: '34.64.165.223',
//   port: '3306',
//   user: 'goblin',
//   password: '',
//   database: 'movie_on',
// };

// var con = mysql.createConnection(db_info);
// con.query('SELECT * FROM user_info', function (err, res, fields) {
//   if (err) console.log(err);
//   console.log(res);
// });

// con.end();

// const http = require('http');
// const hostHome = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  let dirName = __dirname.substring(0, __dirname.lastIndexOf('\\'));

  if (request.url == '/') {
    _url = '/html/serviceCenter.html';
  }
  response.writeHead(200);
  response.end(fs.readFileSync(dirName + _url));
});
app.listen(3000);
