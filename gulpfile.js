const gulp = require('gulp')
  , gutil = require('gulp-util')
  , concat = require('gulp-concat')
  , minifycss = require('gulp-minify-css')
  , uglify = require('gulp-uglify')
  , useref = require('gulp-useref');

const html = {
  source: '.',
  target: 'dist'
};

const js = {
  source: '.',
  target: 'dist'
};

gulp.task('html', function() {
  return gulp.src([
     '*.html'
  ])
  .pipe(useref({noAssets: true}))
  .pipe(gulp.dest(html.target));
});


gulp.task('js', function() {
  return gulp.src([
  'index.js'
  ])
  .pipe(uglify({mangle:true}).on('error', gutil.log))
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest(js.target));
});


gulp.task('build', gulp.series('html', 'js'));
