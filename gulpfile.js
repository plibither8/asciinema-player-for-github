const del = require('del');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gulp = require('gulp');
const merge = require('merge-stream');
const uglify = require('gulp-uglify-es').default;
const zip = require('gulp-zip');

gulp.task('js', () => {
	const presets = [
		['@babel/env', {targets: {browsers: ['> 75%']}}]
	];
	return gulp.src('src/*.js')
		.pipe(babel({presets}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('binaries', () => {
	const paths = {
		'src/img/**/*': 'dist/assets/img',
		'src/fonts/*': 'dist/assets/fonts',
		'src/docs/*': 'dist/assets/docs'
	};

	return merge(Object.entries(paths).map(([from, to]) =>
		gulp.src(from).pipe(gulp.dest(to))
	));
});

gulp.task('manifest', () => {
	return gulp.src('src/manifest.json')
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
	gulp.watch('src/*.js', gulp.series('js'));
	gulp.watch('src/manifest.json', gulp.series('manifest'));
});

gulp.task('build:dev', gulp.parallel(
	'manifest', 'js', 'binaries'
));

gulp.task('package', () => {
	return gulp.src('dist/*')
		.pipe(zip('extension.zip'))
		.pipe(gulp.dest('./'))
});

gulp.task('build:prod', gulp.series(
	'build:dev', 'package'
));

gulp.task('default', gulp.series('build:dev', 'watch'));