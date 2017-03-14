var concat = require('gulp-concat'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    copy2 = require('gulp-copy2'),
    babel = require('gulp-babel');

gulp.task('babel', () => gulp.src('./__src__/**/*.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('./dist'))
);

gulp.task('babel-dist', () => gulp.src('./__src__/index.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('./'))
);

gulp.task('index-dist', () => gulp.src('./__src__/index.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('/Users/renato-vml/Desktop/teste/ebilling-frontend/node_modules/oilib/'))
);


gulp.task('babel-renato', () => gulp.src('./__src__/**/*.jsx')
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest('/Users/renato-vml/Desktop/teste/ebilling-frontend/node_modules/oilib/dist/'))
);

gulp.task('css', () => gulp.src('./__src__/**/*.css')
    .pipe(gulp.dest('./dist'))
);

gulp.task('build', ['babel', 'sass']);


gulp.task('copy-fonts', function() {
    var paths = [
        {
            src: './__src__/styles/fonts/**/',
            dest: './dist/styles/fonts/'
        }
    ];
    return copy2(paths);
});

gulp.task('copy-dist', function() {
    var paths = [
        {
            src: './dist/**/',
            dest: '/Users/renato-vml/Desktop/teste/ebilling-frontend/node_modules/oilib/dist/'
        }
    ];
    return copy2(paths);
});


gulp.task('watch-js', function() {
    // Endless stream mode 
    return watch('./__src__/**/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function() {
    return gulp.src('./__src__/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
});


gulp.task('watch-js-dist', function() {
    // Endless stream mode 
    return watch('./__src__/**/*.jsx')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('/Users/renato-vml/Desktop/teste/ebilling-frontend/node_modules/oilib/dist/'))
});

gulp.task('sass-dist', function() {
    return gulp.src('./__src__/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('/Users/renato-vml/Desktop/teste/ebilling-frontend/node_modules/oilib/dist/styles'));
});

gulp.task('fonts-dist', function() {
    var paths = [
        {
            src: './__src__/styles/fonts/**/',
            dest: '/Users/renato-vml/Desktop/teste/ebilling-frontend/node_modules/oilib/dist/styles/fonts/'
        }
    ];
    return copy2(paths);
});


gulp.task('sass:watch', function() {
    gulp.watch('./__src__/styles/scss/**/*', ['sass']);
});

gulp.task('sass:watch-dist', function() {
    gulp.watch('./__src__/styles/**/*', ['sass-dist']);
});


