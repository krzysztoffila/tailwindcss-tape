const gulp = require('gulp');
const postcss = require('postcss');
const browserSync = require('browsersync').create();

//Style Compilation
function style() {
    return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());

}

exports.style = style;