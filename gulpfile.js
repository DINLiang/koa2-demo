// 添加引用
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

var nodeEnv = gulp.env.nodeEnv || 'development';

gulp.task("node", function() {
  nodemon({
      script: 'app.js',
      env: {
          'NODE_ENV': nodeEnv
      }
  })
});

gulp.task('server', ["node"], function() {
    var files = [
        'views-ejs/*.ejs',
        'router/*.js',
    ];

    browserSync.init(files, {
        proxy: 'http://localhost:3200',
        // browser: 'chrome',
        notify: false,
        port: 3201
    });

    gulp.watch(files).on("change", reload);
});
