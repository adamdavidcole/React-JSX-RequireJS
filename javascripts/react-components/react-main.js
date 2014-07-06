/** @jsx React.DOM */
require(["react", "jsx!react-components/buttonBox", "jsx!react-components/scoreBoard","models/model","jsx!react-components/timer"], function(React, buttonBox, scoreBoard, colorModel, timer) {
    var App = React.createClass({
        getInitialState: function() {
            return {
                      model: colorModel,
                      color: 'lightsalmon',
                      isTimerOn: true
            }
        },

        handleButtonClick: function(btn) {
            if (this.state.isTimerOn) {
                if (btn) {
                    this.state.model.incrementBlue();

                } else {
                    this.state.model.incrementRed();

                }
                this.setState({color: getRandomColor()});
                this.state.model.switchMode();
                this.setState({model: this.state.model});
            }
        },

        handleTimerOver: function() {
            this.setState({model:this.state.model, isTimerOn: false});
        },

        handleResetButton: function() {
            this.state.model.resetBlue();
            this.state.model.resetRed();
            this.setState({model:this.state.model, isTimerOn: true});
        },

        render: function() {
            var style = {
                backgroundColor : this.state.color
            };
            var finalScore = this.state.model.getBlueCount() - this.state.model.getRedCount();
            return (
                <div  className="window" style={style}>
                    <h1 className="title"> REACT! </h1>
                    <scoreBoard blueCount={this.state.model.getBlueCount()} redCount={this.state.model.getRedCount()}/>
                    <buttonBox handleButtonClick={this.handleButtonClick} isBlue={this.state.model.getIsBlue()}/>
                    <timer handleResetButton={this.handleResetButton}  handleTimerOver={this.handleTimerOver} score={finalScore}/>
                </div>
                )
        }
    });
    React.renderComponent(
        <App />,
        document.getElementById('content')
    )
});

var getRandomColor = function() {
    var colorArr = "#";
    for (x = 0; x < 6; x++) {
        var ranNum = 8 + Math.floor(Math.random() * 8);
        var hex = ranNum.toString(16).toUpperCase();
        colorArr += hex;

    }
    return colorArr;


};