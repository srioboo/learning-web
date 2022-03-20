const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    schema {
        query: Query
    }

    type Query {
        greetings: String
    }
`;

/** Esta Query se lanzará cada vez que se llame a la consulta greetins
 * Query debe ser igual que la definida en typeDefs
 */
const resolvers = {
    Query: {
        greetings: () => 'Hello world'
    }
}
;

// creamos el servidor, hay que importar ApolloServer
const server = new ApolloServer({typeDefs, resolvers});
server.listen({port:9000})
 .then((serverInfo) => console.log(`Server activo en ${serverInfo.url}`));