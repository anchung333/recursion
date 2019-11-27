// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
    var result = [];
    var resultObj = [];
    if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
        return '' + obj; 
    } else if (typeof obj === 'string')	{
        return '\"' + obj + "\"";
    } else if (typeof obj === 'function' || typeof obj === undefined) {
        return '';
    } else if (Array.isArray(obj)) {
	    for (i=0; i<obj.length;i++) {
            result.push(stringifyJSON(obj[i]));
	    }
	    return '[' + result + ']';
    } else if(typeof obj === "object") {
        for (var key in obj) {
            if (typeof obj[key] === 'function' || obj[key] === undefined) {
                break;
            } else {
                resultObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
            }
	    }
	    return "{" + resultObj + "}";
    }
};