var mysql = require('mysql');
var db_info = {
  host: '34.64.165.223',
  port: '3306',
  user: 'goblin',
  password: '',
  database: 'movie_on',
};

var con = mysql.createConnection(db_info);
con.query('SELECT * FROM user_info', function (err, res, fields) {
  if (err) console.log(err);
  console.log(res);
});

con.end();
