import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen(3001).then(({url}) => {
    console.log(`your api is running at: ${url}`)
})