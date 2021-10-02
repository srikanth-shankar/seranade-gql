const db = require('./db');

const Query = {
    users: () => db.users.list()
};

const Mutation = {
    signup: (root, {input}) => db.users.create(input)
}


const User = {
    likes: (user) => {
        var userLikes = user.likes;
        artistNames = [];
        userLikes.forEach(x => {
            artistNames.push(db.artists.get(x));
        })
        return artistNames;
    }
}

module.exports = {Query, Mutation, User};