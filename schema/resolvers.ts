import { MoviesList, UserList } from "../data";
import { CreateUserDTO } from "./createUserDTO";
import { UpdateUserDTO } from "./updateUserDTO";
const _ = require("lodash"); 

export const resolvers = {
    Query: {
        // User Resolvers
        users: () => {
            return UserList;
        },

        user: (parent: any, args: { id: string; }) => {
            const id = args.id;
            const user = _.find(UserList, {
                id: Number(id),
            });
            return user;
        },

        // Movie Resolvers
        movies: () => {
            return MoviesList;
        },

        movie: (parent: any, args: { name: string; }) => {
            const name = args.name;
            const movie = _.find(MoviesList, { name });
            return movie;
        },
    },

    Mutation: {
        createUser: (parent: any, args: { user: any; }) => {
            const user = args.user;

            const newUser = {
                id: UserList.length + 1, 
                ...user,
                nationality: user.nationality || "USA",
                friends: []
            };

            UserList.push(newUser);

            return newUser;
        },

        updateUser: (parent: any, args: {user: UpdateUserDTO}) => {
            return
        }
    }
}