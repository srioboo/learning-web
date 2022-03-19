const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greetings: String
    }
`;

console.log(typeDefs);