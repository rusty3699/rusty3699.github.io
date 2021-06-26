
//to run gulp minify-html
//to run gulp styles
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
//source html
var html_src='./index.html'
//dest html
var html_dist='dist'
//css source
//var css_src='./assets/css'
var css_dist='dist/css'


//minify html and js
gulp.task('minify-html', function() {
return gulp.src(html_src)
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(htmlmin({removeComments:true}))
    .pipe(htmlmin({minifyJS: true}))

.pipe(gulp.dest(html_dist));
});

//concat the css filess 
gulp.task('styles', function() {
  gulp.src("./assets/css/**.css")
    .pipe(concat('main.css'))
    .pipe(gulp.dest(css_dist));
});
