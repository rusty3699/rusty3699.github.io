/*
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');


var html_file='./index4.html'

var html_dist='./index3.html'

gulp.task('minify-html', function() {
  return gulp.src(html_file)
          .pipe(htmlmin())
          .pipe(gulp.dest(html_dist));
});
*/
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

//source
var html_src='./index.html'
//dest
var html_dist='./index5.html'


//minify
gulp.task('minify-html', function() {
return gulp.src(html_src)
.pipe(htmlmin())
.pipe(gulp.dest(html_dist));
});
