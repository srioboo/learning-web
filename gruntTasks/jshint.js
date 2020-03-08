 /**
 * Para validar js
 */
module.exports = {
	options: {
		jshintrc: '<%= baseDir %>.jshintrc',
		reporterOutput: ''
	},
	gruntfile: {
		src: 'Gruntfile.js'
	},
	src: {
		src: [ 'src/**/*.js' ]
	},
	test: {
		src: [ 'test/**/*.js' ]
	}
}
