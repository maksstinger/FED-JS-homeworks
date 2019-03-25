let americanStates = {
  "AL" : "Alabama",
  "AK" : "Alaska",
  "AS" : "American Samoa",
  "AZ" : "Arizona",
  "AS" : "Arkansas"
}

function transformObject(obj) {
	let arrayFromObject = Object.entries(obj);
	Object.fromEntries = arrayFromObject => 
	    Object.assign({}, ...Array.from(arrayFromObject, ([key, value]) => ({[value]: key})));
	let backToObj = Object.fromEntries(arrayFromObject);
	console.log(backToObj);
}

console.log(transformObject(americanStates));