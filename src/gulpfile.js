var gulp = require('../node_modules/gulp');
var exec = require('child_process').exec;

gulp.task('test-routes', function(){
  var curl = ['curl http://localhost:8080', 'curl http://localhost:8080/router-example',
              'curl http://localhost:8080/router-example/user', 'curl http://localhost:8080/router-example/test'];

  for(var i = 0; i < curl.length; i++){
    exec(curl[i], function(err, out, errout){
      console.log(this);
      if(err) console.log('Error: ' + err);
      else console.log('Output: ' + out + '\n')
    });
  }
});

gulp.task('run-app', function(){
  exec('node app.js');
});

gulp.task('default', ['run-app', 'test-routes']);
