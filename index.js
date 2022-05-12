const {ApolloServer} = require('apollo-server');
const {typeDefs} = require("./schema/type-defs")
const {resolvers} = require("./schema/resolvers")

const defaults = require('nodemon/lib/config/defaults');

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=> {
    console.log(`Listening on ${url}`)
})