sign up wifi form: fav artists from list of artists... 

sign in... refresh playlist and save the playlist to db(no db ,, using a file here).

sign out... by time expired or leave network --- refresh playlist.

another service keeps playing from the playlist..

users: [
		{id: "emailId1", likes: [{id: 1, name: "art1"}, {id: 2, name: "art2"}, {id: 5, name: "art5"}]},
		{id: "emailId2", likes: [{id: 1, name: "art1"}, {id: 3, name: "art2"}, {id: 6, name: "art5"}]},
		{id: "emailId3", likes: [{id: 6, name: "art1"}, {id: 2, name: "art2"}, {id: 5, name: "art5"}]}
	   ]

artists: [
    {"id": "id1", "name": "art1"},
    {"id": "id2", "name": "art2"},
    {"id": "id3", "name": "art3"},
    {"id": "id4", "name": "art4"},
    {"id": "id5", "name": "art5"},
    {"id": "id6", "name": "art6"},
    {"id": "id7", "name": "art7"},
    {"id": "id8", "name": "art8"}
]
		
// add user too cos ,ultiple users can like same art, so if 1 signs off, we should not take it out of the playlist.		
playlist: [
    {"artId": "id1", "userIDs": ["emailId1", "emailId2", "emailId4", "emailId6"]},
    {"artId": "id2", "userIDs": ["emailId1", "emailId3", "emailId5"]},
    {"artId": "id3", "userIDs": ["emailId2"]},
    {"artId": "id4", "userIDs": []},
    {"artId": "id5", "userIDs": ["emailId1", "emailId3"]},
    {"artId": "id6", "userIDs": ["emailId2", "emailId3", "emailId4", "emailId5", "emailId6"]},
    {"artId": "id7", "userIDs": []},
    {"artId": "id8", "userIDs": []}
]


// Add user(signup) curl
curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:9000/seranade \
    --data '{"query":"mutation Signup($input: AddUserInput) {\n  userId: signup(input: $input)\n}","variables":"{\r\n  \"input\":{\r\n    \"id\": \"email7\",\r\n    \"likes\": [\"id1\", \"id6\"]\r\n  }\r\n}"}'


// get users curl:
curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:9000/seranade \
    --data '{"query":"query Query {\n  users {\n    id\n    likes {\n      name\n    }\n  }\n}","variables":"{\r\n}"}'


// get user by id:
curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:9000/seranade \
    --data '{"query":"query{\n  signin(id: \"emailId1\") {\n    id,\n    likes {\n      name\n    }\n  }\n}"}'

