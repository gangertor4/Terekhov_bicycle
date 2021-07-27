const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(less())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('server', gulp.series('sass', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("sass/*.scss", gulp.series('less'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('server'));
