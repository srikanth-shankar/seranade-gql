sign up wifi form: fav artists from list of artists... 

sign in... refresh playlist and save the playlist to db.

sign out... by time expired or leave network --- refresh playlist & save playlist

another service keeps playing from the playlist..

users: [
		{id: "emailId1", likes: [{id: 1, name: "art1"}, {id: 2, name: "art2"}, {id: 5, name: "art5"}]},
		{id: "emailId2", likes: [{id: 1, name: "art1"}, {id: 3, name: "art2"}, {id: 6, name: "art5"}]},
		{id: "emailId3", likes: [{id: 6, name: "art1"}, {id: 2, name: "art2"}, {id: 5, name: "art5"}]}
	   ]
		
// add user too cos ,ultiple users can like same art, so if 1 signs off, we should not take it out of the playlist.		
playlist: [{user: email1, artId: id1}
			{user: email1, artId: id3},
			{user: email2, artId: id2}
			{user: email2, artId: id5}
			{user: email3, artId: id1}
]


// Add user curl
curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:9000/seranade \
    --data '{"query":"mutation Signup($input: AddUserInput) {\n  userId: signup(input: $input)\n}","variables":"{\r\n  \"input\":{\r\n    \"id\": \"email7\",\r\n    \"likes\": [\"id1\", \"id6\"]\r\n  }\r\n}"}'


// get users curl:
curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:9000/seranade \
    --data '{"query":"query Query {\n  users {\n    id\n    likes {\n      name\n    }\n  }\n}","variables":"{\r\n}"}'





