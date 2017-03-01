var gulp = require('gulp')
var sshexec = require('ssh-exec');
var exec = require('child_process').exec;
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
  exec('git checkout -b gh-pages && git checkout master', function(){
    exec('git filter-branch --subdirectory-filter /htmls gh-pages', function(){
      exec('git add --all && git commit -m "updated gh-page" && git push -f origin gh-pages', function(err, out, errout){
        if(err) console.error('Error: ' + err)
        else    console.log('commited changes');
      });
    });
  });
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
