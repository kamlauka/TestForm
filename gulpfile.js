var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: '.'
        },
        tunnel: true,
        host: 'localhost',
        port: 4444,
        logPrefix: "My_Local_Server"
    })
})

gulp.task('watch', ['browserSync', 'default'], function (){
    gulp.watch('less/*.less', ['default']);
    gulp.watch('*.html', reload);
});

