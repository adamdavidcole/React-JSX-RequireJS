/** @jsx React.DOM */
define(["react"],function(React) {
    return React.createClass({
        getInitialState: function() {
            return {secondsElapsed: 60};
        },
        tick: function() {
            this.setState({secondsElapsed: this.state.secondsElapsed - 1});
        },
        componentDidMount: function() {
            this.interval = setInterval(this.tick, 1000);
        },
        componentWillUnmount: function() {
            clearInterval(this.interval);
        },
        render: function() {
            return (
                <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
                );
        }
    });
});/**
 * Created by Adam_Cole on 7/7/14.
 */
