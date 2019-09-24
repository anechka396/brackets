module.exports = function check(str, bracketsConfig) {
	var bracketsMap = new Map();
	var stack = [];
	
	bracketsConfig.forEach(function(bracketsPair){ 
		bracketsMap.set(bracketsPair[0], bracketsPair[1])
	});
	for (var i = 0; i < str.length; i++) {
		bracketsMap.get(stack[stack.length-1]) === str.charAt(i) ? stack.pop() : stack.push(str.charAt(i));
	}
	
	return stack.length === 0;
}
