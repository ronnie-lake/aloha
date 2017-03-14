var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpLess = require('gulp-less');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('less', function() {
	gulp.src('./less/main.less')
		.pipe(plumber())
		.pipe(gulpLess())
		.pipe(gulp.dest('./css/'));
});

gulp.task('build', function(){
	gulp.start('less');
});

gulp.task('server', function(){
	return browserSync({
	    port: 9000,
	    server: {
	      baseDir: './'
	    }
	  });
});

gulp.task('watch', function(){
	gulp.watch([
	    './*.html',
	    './js/*.js',
	    './css/*.css'
	  ]).on('change', browserSync.reload);
	watch('./less/*.less', function() {
    	gulp.start('less');
  	});
});


gulp.task('default', ['build','server', 'watch']);