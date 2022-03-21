# graphql-examples
Curso de graphql y ejemplos

GraphQL extensions es un buen añadido para VSCode

## Setup

Trans clonar lanzar:

```bash
# esto instalará los comandos necesarios
npm install
```

## Lanzar el servidor

Para lanzar el servidor se ejecuta
```
node server.js
```

## Apuntes GraphQL
- las query responden con un object data
- si no ponenmos el método correcto o no existe devuelve un objeto de error
- Las query usan al typeDef en nuestro caso para definir las query
- Query se puede omitir en las consultas dado que es la opción por defecto
- en el typeDefs podemos añadir un método schema, que se puede omitir porque por defeto es: 
    ´´´
    schema {
        query: Query
    }
    ´´´

- Con GraphQL siempre se usan POST request
- usa json tanto en el envio como recepción de datos

- los tipos:
    - hay un tipo especiál ID
    - si no queremos que un atributo esté vacío ponermos una exclamación ej.- ID!
