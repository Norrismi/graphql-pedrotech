const UserList = [
    {
        "id": 1,
        "name": "Merle",
        "username": "mchavrin0",
        "age": 25,
        nationality: "CHINA",
        friends: [
            {
                "id": 3,
                "name": "Ralina",
                "username": "rcosford2",
                "age": 94,
                "nationality": "KAZAKHSTAN"
            }, {
                "id": 4,
                "name": "Christean",
                "username": "cgilbank3",
                "age": 81,
                "nationality": "TUNISIA"
            },
        ]
    }, {
        "id": 2,
        "name": "Gabriele",
        "username": "glendon1",
        "age": 74,
        "nationality": "GREECE"
    }, {
        "id": 3,
        "name": "Ralina",
        "username": "rcosford2",
        "age": 94,
        "nationality": "KAZAKHSTAN",
        friends: [
            {
                "id": 5,
                "name": "Christen",
                "username": "cbirtle4",
                "age": 28,
                "nationality": "RUSSIA"
            }
        ]
    }, {
        "id": 4,
        "name": "Christean",
        "username": "cgilbank3",
        "age": 81,
        "nationality": "TUNISIA"
    }, {
        "id": 5,
        "name": "Christen",
        "username": "cbirtle4",
        "age": 28,
        "nationality": "RUSSIA"
    }]

const MovieList = [
    {
        "id": 1,
        "name": "Johnny Tremain",
        "year": 1994,
        "isInTheaters": false
    }, {
        "id": 2,
        "name": "Cure, The",
        "year": 2012,
        "isInTheaters": true
    }, {
        "id": 3,
        "name": "Hardcore",
        "year": 2006,
        "isInTheaters": false
    }, {
        "id": 4,
        "name": "Shine of Rainbows, A",
        "year": 1993,
        "isInTheaters": true
    }, {
        "id": 5,
        "name": "Hearty Paws",
        "year": 1993,
        "isInTheaters": false
    }]


module.exports = { UserList, MovieList }