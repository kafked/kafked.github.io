var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size'),
    rename = require('gulp-rename');

var sassSources = [
    'scss/*.scss'
];

gulp.task('sass', function(){
    return gulp.src(sassSources)
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
    var js = gulp.src(['js/*.js', '!js/*jquery*', '!js/*bootstrap*'])
    .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(size({
            title: 'size of custom js'
        }))
        .pipe(gulp.dest('js/min'));
    var jsDeps = gulp.src(['js/*jquery*', 'js/*bootstrap*'])
    .pipe(concat('main.js'))
        .pipe(size({
            title: 'size of js dependencies'
        }))
        .pipe(gulp.dest('js/min'));
});

gulp.task('default', ['sass', 'js']);