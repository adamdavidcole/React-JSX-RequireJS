/** @jsx React.DOM */
define(["react","jsx!react-components/colorButton"],function(React, colorButton) {
    return React.createClass ({

        handleButtonClick: function (btn) {
            this.props.handleButtonClick(btn);
        },
        render: function () {
            return (
                <div className="buttonBox">
                    <colorButton isBlue={this.props.isBlue} handleButtonClick={this.handleButtonClick}/>
                    <colorButton isBlue={!this.props.isBlue} handleButtonClick={this.handleButtonClick}/>
                </div>
                );
        }
    });
});
/**
 * Created by Adam_Cole on 7/6/14.
 */


