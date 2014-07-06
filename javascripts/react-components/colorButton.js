/** @jsx React.DOM */

var color = {
    backgroundColor: "purple"
};

define(["react"],function(React) {
    return React.createClass ({
        handleButtonClick: function() {
            this.props.handleButtonClick(this.props.isBlue);
        },

        render: function () {
            if (this.props.isBlue) {
                color.backgroundColor = "deepskyblue";
            }
            else {
                color.backgroundColor = "red";
            }
            return (
                <div className="colorButton" style={color} onClick={this.handleButtonClick}>
                </div>
                );
        }
    });
});
/**
 * Created by Adam_Cole on 7/6/14.
 */
