
//to run gulp minify-html
//to run gulp styles
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var del = require('del');

//source html
var html_src='./index.html'
//dest html
var html_dist='./dist/'
//css source
//var css_src='./assets/css'
var css_dist='dist/assets/css'


//minify html and js
gulp.task('minify-html', function() {
return gulp.src("./index.html")
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(htmlmin({removeComments:true}))
    .pipe(htmlmin({minifyJS: true}))

.pipe(gulp.dest("./dist/"));
});

//concat the css filess and minify
gulp.task('styles', function() {
 return gulp.src("./assets/css/**.css")
    .pipe(concat('main.css'))
    .pipe(htmlmin({minifyCSS: true}))
    .pipe(gulp.dest(css_dist));
});
gulp.task('clean', function(){
  return del('dist/**', {force:true});
});

//images
gulp.task('copyimg', function () {
  return  gulp.src('./assets/images/**')
        .pipe(gulp.dest('dist/assets/images/'));
});

//resume
gulp.task('copyres', function () {
  return  gulp.src('./assets/resume/**')
        .pipe(gulp.dest('dist/assets/resume/'));
});





//npm run build
gulp.task('build',gulp.series('clean','copyimg','copyres','minify-html','styles'));
