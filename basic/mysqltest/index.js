var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1743775',
  database: 'common_pool',
  debug: false,
});

connection = mysqlConnection.connect(function(err) {

  if (!err) {
    console.log("Connected to Mysql");
    var p_id = 'aa327577-8b0d-4d5a-930f-45534f521bc3'
    var cmd = 'select * from phrase where id=?';

    //query
    mysqlConnection.query(cmd, [p_id], function(err, results) {
      console.log(results);
    });

  } else if ( err ) {
    console.log(err);
  }

});