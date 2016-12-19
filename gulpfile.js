var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imageMin', function()
{
    gulp.src('./public/asset/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/asset/img/min/'));
});


gulp.task('default', ['imageMin']);
