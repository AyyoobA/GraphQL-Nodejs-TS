import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    type Mutation {
        createUser(user: CreateUserInput!): User!
        updateUser(user: UpdateUserInput!): User!
    }

    input CreateUserInput {
        name: String!
        age: Int!
        nationality: Nationality = USA
    }

    input UpdateUserInput {
        id: ID!
        name: String
        age: Int
        nationality: Nationality
    }

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }

    type Movie {
        id: ID!
        name: String!
        year: Int!
    }

    enum Nationality {
        USA
        UAE
        UK
        SL
    }
`