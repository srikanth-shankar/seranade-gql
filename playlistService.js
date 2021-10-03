const db = require('./db');
const fs = require('fs');
const playlist = require('./data/playlist.json');

const refreshPlaylist = (user, joined) => {
    try{
        if(joined) {
            user.likes.forEach(artId => {
                (playlist.find(x => x.artId === artId)).userIds.push(user.id);;
            });
        } else {
            user.likes.forEach(artId => {
                var idx = playlist.find(x => x.artId === artId).userIds.indexOf(user.Id);
                (playlist.find(x => x.artId === artId)).userIds.splice(idx, 1);
            });
        }
        fs.writeFileSync('./data/playlist.json', JSON.stringify(playlist));
        return true;
    }
    catch(e) {
        // log err msg
        return false;
    }
    
}

// const refreshPlaylist = (user, joined) => {
//     try{
//         let list = db.playlist.list();
//         if(joined) {
//             user.likes.forEach(artId => {
//                 var selectedPlaylist = list.find(x => x.artId === artId);
//                 selectedPlaylist.userIds.push(user.id);
//                 db.playlist.update(selectedPlaylist);
//             });
//         } else {
//             user.likes.forEach(artId => {
//                 var idx = playlist.find(x => x.artId === artId).userIds.indexOf(user.Id);
//                 playlist.find(x => x.artId === artId).userIds.splice(idx, 1);
//             });
//         }
//         return true;
//     }
//     catch(e) {
//         // log err msg
//         return false;
//     }
    
// }

module.exports = {
    refreshPlaylist
}