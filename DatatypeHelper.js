this.isInt = function(valueToCheck){
	if (!isNaN(valueToCheck) && value.indexOf('.') == -1) {
		return true;
	}
	return false;
}

this.isIntOrDouble = function(valueToCheck){
	if (!isNaN(valueToCheck)) {
		return true;
	}
	return false;
}

this.isString = function(valueToCheck) {
	if (isNaN(valueToCheck)) {
		return true;
	}
	return false;
}

//TODO: isIP needs more refining.
this.isIP = function(valueToCheck) {
	if (value.indexOf('.') != -1) {
		return true;
	}
	return false;
}
