function generateXMLLine(data, tag) {
	return ("<" + tag + ">" + data + "</" + tag + ">")
}
	
this.generateXMLFile = function(data, tags, mainTag) {
	if (data.length == tags.length) {
		var finalString = "<" + mainTag + ">";
		var arrayLength = data.length;
		for (var i = 0; i < arrayLength; i++) {
			finalString = finalString + generateXMLLine(data[i], tags[i]);
		}
		finalString = finalString + "</" + mainTag + ">";
		return finalString;
	} else {
		return "invalid arrays, must be the same length."
	}
}
