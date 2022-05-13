const { UserList, MovieList } = require("../Data")
const _ = require("lodash")


const resolvers = {
    Query: {
        //User Resolvers
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        //Movie Resolvers
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.year >= 2000 && movie.year <= 2020)
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            // console.log(user);

            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1;
            UserList.push(user)
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.map((user) => {
                if (user.id === id) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            });
            return userUpdated
        }
    }
}

module.exports = { resolvers } 