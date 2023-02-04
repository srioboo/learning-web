# Grunt Test

Test de Grunt con división de tareas por ficheros usando los paquetes:
  
  1 load-grunt-tasks: para cargar las tareas
  2 load-grunt-configs: para cargar las configuraciones

## Getting Started

prueba

## Los archivos

El Gruntfile.js quedaría así:

```javascript
'use strict';

module.exports = function(grunt) {
  // la variable task crea un grunt.loadNpmTasks() por todas las devDependencies
  // y dependencies que encuetre en pacakge.json
  var tasks = {scope: ['devDependencies', 'dependencies']};
  
  // variable para las opciones, aqui le decimos de que carpeta coger las configuraciones
  // adicionales
  var options = {config: { src: "gruntTasks/*.js" }};
  // variables para la configuracion
  var configs = require('load-grunt-configs')(grunt, options);

  // indicamos que requerimos que se cargan las tareas
  require('load-grunt-tasks')(grunt, tasks);

  // añadimos las configs a grunt.initConfig()
  grunt.initConfig(configs);
  
  // registramos las tareas
  grunt.registerTask('default', ['cssmin']);

};
```

Y en el directorio gruntTasks se pondrían las tareas en forma de archivos .js:

  1 cssmin.js
  2 concat.js
  3 clean.js
  4 etc...
