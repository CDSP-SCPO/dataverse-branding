const { watch, src, dest } = require('gulp');
const sass = require('gulp-sass');

const scssSrc = './src/css/**/*.scss';
const destDir = './dist/css';

function compileSCSS() {
    return src(scssSrc)
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['./node_modules/', './css/'],
        }).on('error', sass.logError))
        .pipe(dest(destDir));
}

function watchSCSS() {
    return watch(scssSrc, { ignoreInitial: false }, compileSCSS);
}

exports.default = compileSCSS;
exports.build = compileSCSS;
exports.watch = watchSCSS;