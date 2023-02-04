 /**
 * Para observar archivos que cambian
 */
module.exports = {
	//watch: {
	gruntfile: {
		files: '<%= jshint.gruntfile.src %>',
		tasks: [ 'jshint:gruntfile' ]
	},
	src: {
		files: '<%= jshint.src.src %>',
		tasks: [ 'jshint:src', 'qunit' ]
	},
	test: {
		files: '<%= jshint.test.src %>',
		tasks: [ 'jshint:test', 'qunit' ]
	}
}
