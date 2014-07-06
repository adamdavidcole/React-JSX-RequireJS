/**
 * Created by Adam_Cole on 7/6/14.
 */



define([],function() {
    var blueCount = 0;
    var redCount = 0;
    var isBlue = true;

    var incBlue = function() {
        blueCount++;
    };
    var getBlueCount = function () {
        return blueCount;
    }
    var resetBlueCount = function() {
        blueCount = 0;
    }


    var incRed = function() {
        redCount++;
    };
    var getRedCount = function () {
        return redCount;
    }
    var resetRedCount = function() {
        redCount = 0;
    }

    var getIsBlue = function() {
        return isBlue;
    }

    var switchMode = function() {
        var rand = Math.random();
        if (rand <= .5) isBlue = !isBlue;
        console.log(rand);
    }

    return {
        getBlueCount : function() {
            return getBlueCount();
        },
        incrementBlue : function() {
            return incBlue();
        },
        resetBlue : function() {
            return resetBlueCount();
        },

        getRedCount : function() {
            return getRedCount();
        },
        incrementRed : function() {
            return incRed();
        },
        resetRed : function() {
            return resetRedCount();
        },
        getIsBlue : function() {
            return getIsBlue();
        },
        switchMode : function() {
            return switchMode();
        }




    }
});