/** @jsx React.DOM */
define(["react"],function(React) {
    return React.createClass({
        getInitialState: function() {
            return {
                secondsElapsed: 15,
                finalScore: 0
            };
        },
        tick: function() {
            this.setState({secondsElapsed: this.state.secondsElapsed - 1});
            if (this.state.secondsElapsed === 0) {
                this.props.handleTimerOver();
                this.setState({finalScore: this.props.score});
            }
        },
        handleResetButton: function () {
          console.log("clickedhandler?");
          this.props.handleResetButton();
          this.setState({secondsElapsed: 15});
        },

        componentDidMount: function() {
            this.interval = setInterval(this.tick, 1000);
        },
        componentWillUnmount: function() {
            clearInterval(this.interval);
        },
        render: function() {
            if (this.state.secondsElapsed >0) {
                return (
                    <div className="timer">Time left: {this.state.secondsElapsed}</div>
                    );
            } else {
                return (
                    <div className="timer">
                        <span>Final Score: &nbsp; {this.state.finalScore}</span>
                        <div className="btn blue" onClick={this.handleResetButton}>Reset Game</div>
                    </div>
                );
            }
        }

    });
});/**
 * Created by Adam_Cole on 7/7/14.
 */
