// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  let result = [];
  let examineElementsClassList = function(element) {
  	if (element.classList !== undefined) {
  		if (element.classList.contains(className)) {
  			result.push(element);
  		}
  	}
  	if (element.childNodes) {
  		for (let i = 0; i < element.childNodes.length; i++) {
  			examineElementsClassList(element.childNodes[i]);
  		}
  	}
  }

  examineElementsClassList(document.body);
  return result;
};

//go through document body
//go through all the child nodes
//check each child node's class list
//if class list checks out to target class name, push it to result
//uses document.body, element.childNodes, element.classList
//element.classList.contains(className)
