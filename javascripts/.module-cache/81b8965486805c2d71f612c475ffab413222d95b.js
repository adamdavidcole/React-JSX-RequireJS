/**
 * Created by Adam_Cole on 7/6/14.
 */
/** @jsx React.DOM */

console.log("hello require!");


require.config({
    "baseUrl" : "javascripts",
    "paths"   : {
        "jquery"     : "jquery-1.10.0.min",
        "react"      : "react-0.10.0",
        "JSXTransformer" : "JSXTransformer-0.10.0"
    },
    "shim" : {
        "react" : {
            "deps" : [
                "jquery",
                "JSXTransformer"
            ],
            "exports" : "React"
        },
        "jquery" : {
            "exports" : "$"
        },
        "JSXTransformer" : {
            "exports" : "JSXTransformer"
        }
    }
});



require(["react", "hello"], function(React, Hello) {
    console.log("inhere");

    React.renderComponent(
        React.DOM.h1(null, "HELLO WORLD"),
        document.getElementById('content')
    )
});

console.log("hello require2!");
