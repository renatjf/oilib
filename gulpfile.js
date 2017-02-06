var concat = require('gulp-concat'),
gulp = require('gulp'),
watch = require('gulp-watch'),
sass = require('gulp-sass'),
babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src('./__src__/**/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('./dist'))
);

gulp.task('babel-dist', () =>
    gulp.src('./__src__/index.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('./'))
);

gulp.task('css', () =>
    gulp.src('./__src__/**/*.css')
        .pipe(gulp.dest('./dist'))
);

 gulp.task('build',['babel','sass']);


 gulp.task('watch-js', function () {
    // Endless stream mode 
    return watch('./__src__/**/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('./dist'))
});

 gulp.task('sass', function () {
  return gulp.src('./__src__/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});


 gulp.task('watch-js-dist', function () {
    // Endless stream mode 
    return watch('./__src__/**/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('/var/www/react-app/my-app/node_modules/oilib/dist'))
});

 gulp.task('sass-dist', function () {
  return gulp.src('./__src__/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/var/www/react-app/my-app/node_modules/oilib/dist/styles'));
});



gulp.task('sass:watch', function () {
  gulp.watch('./__src__/styles/scss/**/*', ['sass']);
});

gulp.task('sass:watch-dist', function () {
  gulp.watch('./__src__/styles/scss/**/*', ['sass-dist']);
});