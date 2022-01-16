const fs = require('fs');
const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const mode = (process.env.MODE || 'none').replace(/\s/g, '');

// To chmod working
if (1) {
  fs.chmod = (a, b, cb) => cb(0);
}

// Js
const js = () =>
  gulp
    .src([
      './source/js/vendor/jquery-3.5.1.min.js',
      './source/js/vendor/*.js',
      './source/js/helpers/*.js', 
      './source/js/commons/*.js', 
      './source/js/components/*.js',
      './source/js/scripts.js']) 
    .pipe(concat('scripts.js'))
    .pipe(minify())   
    .pipe(gulp.dest('../static/js'));

// Sass to css
const scss = () => 
  gulp
    .src('./source/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../static/css'));

// Fonts
const fonts = () =>
  gulp
    .src('./source/fonts/**/*')
    .pipe(gulp.dest('../static/fonts'));

// Images
const images = () =>
  gulp
    .src('./source/images/**/*')
    .pipe(gulp.dest('../static/images'));

gulp.watch(['./source/js'], js);
gulp.watch(['./source/scss'], scss);
gulp.watch(['./source/fonts'], fonts);
gulp.watch(['./source/images'], images);

exports.js = js;
exports.scss = scss;
exports.fonts = fonts;
exports.images = images;

exports.default = gulp.parallel(js, scss, fonts, images);
