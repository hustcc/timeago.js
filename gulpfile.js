const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const injectVersion = require('gulp-inject-version');
const stripCode = require('gulp-strip-code');

gulp.task('lib', () => (
  gulp.src('src/timeago.js')
  .pipe(injectVersion())
  .pipe(gulp.dest('dist/'))
  .pipe(uglify())    //uglify
  .pipe(rename('timeago.min.js'))
  .pipe(gulp.dest('dist/'))
));

gulp.task('en', () => (
  gulp.src('src/timeago.js')
  .pipe(injectVersion())
  .pipe(stripCode({
    start_comment: "chinese-locale",
    end_comment: "end-chinese-locale"
  }))
  .pipe(rename('timeago.en.js'))
  .pipe(gulp.dest('dist/'))
  .pipe(uglify())
  .pipe(rename('timeago.en.min.js'))
  .pipe(gulp.dest('dist/'))
));

gulp.task('mini', ['lib', 'en'])