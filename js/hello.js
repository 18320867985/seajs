define(function(require, exports, module) {
  // $ = require('jquery');
  var $ = require('./mobile-1.0.0.js');

exports.sayHello = function() {
    $('#beautiful-sea').click(function(){
    	alert("seajs")
    });
   
};

// $('#beautiful-sea').click(function(){
//  	alert("seajs")
//  });
   
});