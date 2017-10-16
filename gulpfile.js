'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var input = './src/sass/**/*.scss';
var output = './build/css';
var pugInput = './src/views/*.pug';
var jsInput = './src/js/*.js';
var jsOutput = './build/js';
var fontsInput = './src/fonts/*.*';
var fontsOutput = './build/fonts';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './build'
    },
    notify: false
  });
});

gulp.task('html', function buildHTML() {
  return gulp.src(pugInput)
  .pipe(pug({
    pretty: true 
  }))
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('sass', function() {
  return gulp.src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(rename('style.css'))
    //.pipe(concat('style.css'))
    .pipe(gulp.dest(output))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function() {
  return gulp.src(jsInput)
    .pipe(concat('hamintec.js'))
    .pipe(gulp.dest(jsOutput))
});

gulp.task('fonts', function() {
  return gulp.src(fontsInput)
    .pipe(gulp.dest(fontsOutput))
});


gulp.task('watch', ['browserSync', 'sass', 'js', 'html', 'fonts'], function() {
  gulp.watch(input, ['sass']);
  gulp.watch(pugInput, ['html']);
  gulp.watch(jsInput, ['js']);
});
