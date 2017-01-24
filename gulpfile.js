const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imageMin', () =>
{
    gulp.src('./public/asset/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/asset/img/min/'));
});

gulp.task('default', ['imageMin']);
