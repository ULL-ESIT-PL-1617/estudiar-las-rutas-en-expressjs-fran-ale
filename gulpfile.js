var gulp = require('gulp')
var ghpages = require('gulp-gh-pages');
var buildBranch = require('gulp-build-branch');
var sshexec = require('ssh-exec');
var exec = require('child_process').exec;
var path = require('path').resolve() + '\\node_modules\\.bin\\';

gulp.task('create-book', function(){
  var cmd = 'gitbook build ./docs ./\.publish';

  exec(path + cmd, function(err, out, errout){
    if(err) console.error('Error:' + err);
    else    console.log('Executed ' + cmd);
  });
});

gulp.task('deploy-ghpages', function () {
  return gulp.src('./\.publish/**/*').pipe(ghpages({"message" : 'GH-Pages deployed'}));
});

gulp.task('deploy-gitbook', function() {
  return buildBranch({branch: 'branch-gitbook', folder: 'docs', commit : 'Desplegando libro' });
});
