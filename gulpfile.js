var gulp = require('gulp');
var browserify = require('browserify');

gulp.task('build', ['browserify']);
gulp.task('default', ['build']);
