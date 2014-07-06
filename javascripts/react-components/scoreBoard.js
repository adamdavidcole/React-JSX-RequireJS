/** @jsx React.DOM */
define(["react","jsx!react-components/score"],function(React, score) {
    return React.createClass ({

        render: function () {
            return (
                <div className="scoreboard">
                    <score className="blue" count={this.props.blueCount} name="blue"/>
                    <score className="red" count={this.props.redCount} name="red"/>
                </div>
                );
        }
    });
});