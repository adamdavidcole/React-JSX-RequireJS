/** @jsx React.DOM */

function APP() {
    var data =  [[0,0,0],[0,0,0],[0,0,0]];
    var isPlayer1 = true;
    var player1score =  0;
    var player2score = 0;
    var isGameOver = false;
    var that = this;


    this.selectSpot = function(row, col) {
        if (isPlayer1) data[row][col] = 1;
        else data[row][col] = -1;
    }

    this.flipTurn = function() {
        if (!isGameOver) {
            var countDiagonalRL = 0;
            var countDiagonalLR = 0;
            for (var i = 0; i < 3; i++) {
                var countAcross = 0;
                var countDown = 0;
                for (var j = 0; j < 3; j++) {
                    if (isPlayer1 && data[i][j] === 1) countAcross++;
                    else if (!isPlayer1 && data[i][j] === -1) countAcross++;

                    if (isPlayer1 && data[j][i] === 1) countDown++;
                    else if (!isPlayer1 && data[j][i] === -1) countDown++;

                    if (isPlayer1 && data[i][j] === 1 && i === j) countDiagonalRL++;
                    else if (!isPlayer1  && data[i][j] === -1 && i === j) countDiagonalRL++;

                    if (isPlayer1 && data[i][j] === 1 && (i === 0 && j === 2 || i === 1 && j === 1 || i === 2 && j === 0)) countDiagonalLR++;
                    if (!isPlayer1 && data[i][j] === -1 && (i === 0 && j === 2 || i === 1 && j === 1 || i === 2 && j === 0)) countDiagonalLR++;

                }
                if (countAcross === 3 || countDown == 3 || countDiagonalRL === 3 || countDiagonalLR === 3) {
                    console.log("YOU WON ACROSS!");
                    isGameOver = !isGameOver;
                }
            }

        }
        isPlayer1 = !isPlayer1;
    }

    this.getTurn = function() {
        return isPlayer1;
    }

    this.getBoardData = function() {
        return data;
    }
}

var game = new APP();

// tutorial1.js
var app = React.createClass({displayName: 'app',

    render: function() {
        return (
            React.DOM.div( {className:"header"}, 
                React.DOM.h1(null, "Tic-Tac-Toe"),
                turn(null ),
                board(null ),
                gamestatus(null )
            )
            );
    }
});



var turn = React.createClass({displayName: 'turn',
    getInitialState: function() {
        return {
            player: 'Player 1'
        };
    },
    handleClick: function() {
        if (game.getTurn != this.state.turn) {
            this.state.turn = !this.state.turn;
        }
    },
    render: function() {
        return (
            React.DOM.p(null, "TURN: player1"
            )
            );
    }
});

var board = React.createClass({displayName: 'board',

    render: function() {
        return (
            React.DOM.table(null, 
                React.DOM.tr(null, 
                    React.DOM.td(null, boardspot( {row:"0", col:"0"})),
                    React.DOM.td(null, boardspot( {row:"0", col:"1"})),
                    React.DOM.td(null, boardspot( {row:"0", col:"2"}))
                ),
                React.DOM.tr(null, 
                    React.DOM.td(null, boardspot( {row:"1", col:"0"})),
                    React.DOM.td(null, boardspot( {row:"1", col:"1"})),
                    React.DOM.td(null, boardspot( {row:"1", col:"2"}))
                ),
                React.DOM.tr(null, 
                    React.DOM.td(null, boardspot( {row:"2", col:"0"})),
                    React.DOM.td(null, boardspot( {row:"2", col:"1"})),
                    React.DOM.td(null, boardspot( {row:"2", col:"2"}))
                )
            )
            );
    }
});

var boardspot = React.createClass({displayName: 'boardspot',
    getInitialState: function() {
        return {
            spotState: 0
        };
    },

    handleClick: function(event) {
        if (this.state.spotState === 0) {
            game.selectSpot(this.props.row, this.props.col);
            this.setState({spotState: game.getBoardData()[this.props.row][this.props.col]});
            game.flipTurn();
        }
    },

    render: function() {
        var divstyle = {
            backgroundColor: 'cyan',
            backgroundSize: '100%',
            width: '75px',
            height: '75px'
        };
        if (this.state.spotState === 1) {
            divstyle.backgroundImage = 'url(' + 'images/oh.png' + ')';
        } else if (this.state.spotState === -1) {
            divstyle.backgroundImage = 'url(' + 'images/ex.png' + ')';
        }

        return (
            React.DOM.div( {style:divstyle, onClick:this.handleClick}
            )
            );
    }
});



var gamestatus = React.createClass({displayName: 'gamestatus',
    render: function() {
        return (
            React.DOM.div(null, 
                React.DOM.h3(null,  " score " ),
                React.DOM.table(null, 
                    React.DOM.tr(null, 
                        React.DOM.td(null, "0"),
                        React.DOM.td(null, "0")
                    )
                 ),
                React.DOM.button( {type:"button"}, "Play Another Round"),
                React.DOM.button( {type:"button"}, "Reset Game")

            )
            );
    }
});

React.renderComponent(
    app(null ),
    document.getElementById('content')
);