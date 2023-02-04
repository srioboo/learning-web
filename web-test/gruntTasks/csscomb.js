  /**
 * Para formatear los css
 */
module.exports = {
	/*src_only: {
		src: [ 'css/*.css' ],
		dest: 'css',
		ext: '.resorted.css'
	}*/
foo: {
            files: {
                'css/resorted-style.css': ['css/style.css'],
 		'css/resorted-desk-stylesheet.css': ['css/desk-stylesheet-custom.css'],
		'css/resorted-desk-stylesheet-custom.css': ['css/desk-stylesheet-custom.css']
            }
        }
}
