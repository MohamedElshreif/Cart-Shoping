const { dest , task , src, watch } = require('gulp');
const GulpSass = require('gulp-sass');
const Sass = GulpSass(require('sass'));


task('sass', async () => {
    src('src/**/*.scss').pipe(Sass()).pipe(dest('src/css/'))
})

task('watch', async () => {
    watch('src/**/*.scss' , () => {
        src('src/**/*.scss').pipe(Sass()).pipe(dest('src/css/'))
    })
})