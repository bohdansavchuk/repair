var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('minify-css', function(done) {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))

  done();
});

gulp.task('compress-js', function(done) {
  return gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('dist/js/'))

  done();
});

gulp.task('move-js', function(done) {
  return gulp.src('./src/js/*.min.js')
  .pipe(gulp.dest('dist/js/'))

  done();
});

gulp.task('htmlmin', function(done) {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ 
    collapseWhitespace: true 
  }))
  .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function(done) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
  done();
});

gulp.task('tinypng', function(done) {
  gulp.src('./src/img/*.{png,jpg,jpeg}')
      .pipe(tinypng({
          key: 'NKTGFcYvbhS4a6WiqTcvVPF3I2lImCEQ'
      }))
      .pipe(gulp.dest('dist/img/'));
      done();
});

gulp.task('default', gulp.parallel('minify-css','compress-js', 'move-js', 'fonts', 'htmlmin', 'tinypng', function(done){

  done();
}));

