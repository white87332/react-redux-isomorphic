var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
// var svgSprite = require('gulp-svg-sprites');
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

// gulp.task('spriteSvg', function()
// {
//     gulp.src('./public/asset/img/min/*.svg')
//         .pipe(svgSprite({
//             cssFile: "./css/sprite/spriteSvg.css",
//             svgPath: "./img/sprite/spriteSvg.svg",
//             preview: false
//         }))
//         .pipe(gulp.dest('./public/asset'));
// });

gulp.task('default', ['spriteSvg']);
