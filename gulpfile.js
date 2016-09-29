const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const injectVersion = require('gulp-inject-version');

gulp.task('mini', () => (
  gulp.src('src/timeago.js')
  .pipe(injectVersion())
  .pipe(gulp.dest('dist/'))
  .pipe(uglify())    //uglify
  .pipe(rename('timeago.min.js'))
  .pipe(gulp.dest('dist/'))
));
