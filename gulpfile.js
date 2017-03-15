var gulp  = require('gulp');
var sass  = require('gulp-ruby-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
	return sass('./app/src/sass/*.scss', {
		style: 'compressed'
	}).pipe(gulp.dest('./app/src/css'));
});

gulp.task('watch', function(){
	gulp.watch('./app/src/sass/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);