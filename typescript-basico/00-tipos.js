var numero;
var texto;
var condicional;
var tipoAny;
numero = 1;
texto = 'hola mundo';
condicional = true;
console.log(numero, texto, condicional);
tipoAny = 89;
console.log('Si el tipo es any, se puede poner cualquier valor, para número', tipoAny);
tipoAny = '"es una cadena"';
console.log('Si el tipo es any, se puede poner cualquier valor, para cadena', tipoAny);
/**
 * Si tratamos de lanzar
 *
 * numero = '1';
 *
 * Dará un error de compilación dado que se ha solicitado que número sea específicamente un número
 */
