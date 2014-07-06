
/** @jsx React.DOM */

var color = {
    backgroundColor: "purple"
};

define(["react"],function(React) {
    return React.createClass ({
        handleClick: function() {
            this.props.clicked(this.props.pos);
        },

        render: function () {
            return (
                <div className="score" onClick={this.handleClick}>
                    <p>{this.props.name + " "}  count </p>
                    <h3> {this.props.count}  </h3>
                </div>
                );
        }
    });
});
