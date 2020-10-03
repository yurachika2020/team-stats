const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'John',
            lastName: 'Smith',
            age: 25
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            age: 30
        },      
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Sharks',
            teamPoints: 79,
            opponentPoints: 85
        },
        {
            opponent: 'Giants',
            teamPoints: 42,
            opponentPoints: 27
        }
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(firstName, lastName, age){
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opp, ourPts, oppPts){
        const game = {
            opponent: opp,
            teamPoints: ourPts,
            opponentPoints: oppPts
        };
        this.games.push(game);
    },
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

console.log(team.players);

team.addGame('Titans', 100, 98);
team.addGame('Dolphins', 75, 60);
team.addGame('Giants', 95, 120);

console.log(team.games);



