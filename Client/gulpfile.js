const { dest , task , src } = require('gulp');
const GulpSass = require('gulp-sass');
const Sass = GulpSass(require('sass'));


task('sass', async () => {
    src('src/*.scss').pipe(Sass()).pipe(dest('src/css/'))
})