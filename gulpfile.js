var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('dist', function(){
	gulp.src('src/index.js')
    .pipe(rename('xml2json.js'))
		.pipe(gulp.dest('dist/'));
	gulp.src('src/index.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(rename('xml2json.min.js'))
    .pipe(gulp.dest('dist/'));
});