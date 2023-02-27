const gulp = require('gulp');
const dartSass = require('sass');
const sass = require('gulp-sass')(dartSass);
const sourcemaps = require('gulp-sourcemaps');


function buildStyles() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/css'));
};


gulp.task('sass', buildStyles);

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', buildStyles);
});