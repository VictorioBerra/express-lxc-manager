var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('develop', ['sass', 'sass:watch'], function() {
    nodemon({
        script: 'bin/www',
        ext: 'js html njk',
        env: {
            'NODE_ENV': 'development',
            'PORT': 3000
        }
    });
});
