const db = require('./db');
const playlistService = require('./playlistService');

const Query = {
    users: () => db.users.list()
};

const Mutation = {
    signUp: (root, {input}) => db.users.create(input),
    signIn: (root, {id}) => {
        let user = db.users.get(id);
        playlistService.refreshPlaylist(user, true);
    },
    signOut: (root, {id}) => {
        let user = db.users.get(id);
        playlistService.refreshPlaylist(user, false);
    }
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