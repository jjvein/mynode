var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var gulpUtil = require('gulp-util')
var babelify = require('babelify')


var dependencies = [
  'react', 'react-dom'
]

function AppBundle() {


  browserify({
    require: dependencies, 
    debug: true
  })
  .bundle()
  .on('error', gulpUtil.log)
  .pipe(source('vendors.js'))
  .pipe(gulp.dest('./dest'))

  gulpUtil.log('Vendors.js Done!!!')
  
  browserify({
    entries: 'index.js',
    debug: true
  })
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .on('error', gulpUtil.log)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dest'))

  gulpUtil.log('Bundle.js Done!!!')
}


gulp.task('build', function(){
  AppBundle()
})


gulp.task('watch', function(){
  gulp.watch(['./*.js', './component/*.js', '!./gulpfile.js'], ['build'])
})
