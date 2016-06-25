var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');

gulp.task('imageMin', function()
{
    gulp.src('./public/asset/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/asset/img/min/'));
});

gulp.task('spriteImg', function()
{
    var spriteData =
        gulp.src('./public/asset/img/min/*.*')
        .pipe(spritesmith(
        {
            imgName: 'spriteImg.png',
            imgPath: '/asset/img/sprite/spriteImg.png',
            cssName: 'spriteImg.scss',
        }));

    spriteData.img.pipe(gulp.dest('./public/asset/img/sprite'));
    spriteData.css.pipe(gulp.dest('./public/asset/css/sprite'));
});

gulp.task('default', ['spriteSvg']);
