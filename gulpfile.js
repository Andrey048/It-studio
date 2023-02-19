import gulp from 'gulp';
import { deleteAsync } from 'del';

function clean () {
  return deleteAsync([ 'docs' ]);
}
function styles () {
  return gulp.src('source/css/*.css')
    .pipe(gulp.dest('docs/css/'));
}
function images () {
  return gulp.src('source/img/**/*.*')
    .pipe(gulp.dest('docs/img/'));
}
function copy () {
  return gulp.src(['source/**/*.js', 'source/*.html'])
    .pipe(gulp.dest('docs/'));
}

const build = gulp.series(clean, styles, images, copy);

export default build;
