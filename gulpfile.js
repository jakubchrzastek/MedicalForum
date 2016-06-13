var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./app/sass/main.sass')
        .pipe(sass({
            includePaths: ['./app/scripts/dependencies/foundation-sites/scss']
        }))
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['> 1%', 'IE >= 9']
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./app/css/'));

});

gulp.task('jade', function() {
    return gulp.src('./app/jade/*.jade')
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('./app/html/'))
});

gulp.task('copy', function() {
    return gulp.src('./app/html/index.html')
        .pipe(gulp.dest('./app/'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('./app/css/main.css')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./app/sass/*.sass', ['sass']);
    gulp.watch('./app/jade/*.jade', ['jade']);
    gulp.watch('./app/css/main.css', ['css']);
    gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/html/index.html', ['copy']);
});

gulp.task('default', ['connect', 'sass', 'jade', 'html', 'copy', 'css', 'watch']);
