var gulp = require('gulp')
var sshexec = require('ssh-exec');
var exec = require('child_process').exec;
var ghpages = require('gulp-gh-pages');
var path = require('path').resolve() + '\\node_modules\\.bin\\';

/*
* Crea los .html al directorio publish a partir de los .md del dir ./docs
*/
gulp.task('create-book', function(){
  var cmd = 'gitbook build docs htmls';
  exec(path + cmd, function(err, out, errout){
    if(err) console.error('Error:' + err);
    else    console.log('Executed ' + cmd);
  });
});

/*
* Publica en la rama ghpages el contenio del directorio ./html
*/
gulp.task('deploy-gh-pages', function () {
  return gulp.src('./htmls/**/*').pipe(ghpages({"message" : 'ghpages deployed'}));
});

/*
* Crea una rama llamada gitbook, luego filtra el contenido de ./docs a
* dicha rama y luego pushea la rama al master del remote(gbook) de gitbook
*/
gulp.task('deploy-gitbook', function() {
  exec('git checkout -b gitbook && git checkout master', function(){
    exec('git filter-branch --subdirectory-filter ./docs gitbook', function(){
      exec('git push -f gbook gitbook:master', function(){});
    });
  });
});


gulp.task('deploy-iaas', function(){
  var cmd = 'cd src/estudiar-las-rutas-en-expressjs-fran-ale && git pull && npm install && node app.js'
  sshexec(cmd, 'usuario@10.6.129.208').pipe(process.stdout);
});


gulp.task('update-heroku', function(){
  exec('git add -A && git commit -m "Actualizando herokuapp" && git push origin master && git push heroku master', function(err, out, errout){
    if(err){
      console.log('Err:' + err);
    } else {
      console.log('Output: \n' + out + '\n');
    }
  });
});
