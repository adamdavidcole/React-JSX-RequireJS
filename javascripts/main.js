/**
 * Created by Adam_Cole AND Elana Stroud on 7/6/14.
 */
/** @jsx React.DOM */

require.config({
    "baseUrl" : "javascripts",
    "paths"   : {
        "jquery"     : "libs/jquery-1.10.0.min",
        "react"      : "libs/react-0.10.0",
        "jsx" : "libs/jsx",
        "JSXTransformer" : "libs/JSXTransformer-0.10.0",
        "text" : "libs/text"
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

require(["jsx!react-components/react-main"], function(app) {

});
