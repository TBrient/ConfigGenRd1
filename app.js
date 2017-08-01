const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
var XMLHelper = require('./XMLHelper.js');
var DatatypeHelper = require('./DatatypeHelper');

app.set('views', __dirname + '\\views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
   extended: true
}));

//TODO: Seperate into a router and a controller class

app.get('/', function(req, res) {
	res.render('home.jade');
});

app.get('/TimerConfig', function(req, res) {
	res.render('home.jade');
});

app.get('/SunCycleServer', function(req, res) {
	res.render('form.jade');
});

app.post('/SunCycleServer', function (req, res) {
	console.log('post request called');
	var body = req.body;
	var portNum = body.port;
	var latitude = body.latitude;
	var longitude = body.longitude;
	var address = body.address;
	var subscriptionManAddr = body.submanAddress;
	//IT IS POSSIBLE TO RESTRICT PORT ON USER ENTRY. MAY BE EITEHR SHOULD TALK TO ROB

	//If we want to check to ensure that the variables are of the right type before sending them to the server for checking:
	var areDatatypesValid = true;
	var errorMessageArr=["", "", "", "", ""]
	if (!DatatypeHelper.isInt(portNum)) {
		areDatatypesValid = false;
		errorMessageArr[0] = "Port Number must be an Integer";
	}
	if (!DatatypeHelper.isIntOrDouble(latitude)) {
		areDatatypesValid = false;
		errorMessageArr[1] = "Latitude must be a double";
	}
	if (!DatatypeHelper.isIntOrDouble(longitude)) {
		areDatatypesValid = false;
		errorMessageArr[2] = "Longitude must be a double";
	}
	if (!DatatypeHelper.isString(address)) {
		areDatatypesValid = false;
		errorMessageArr[3] = "Address must be a string";
	}
	if (!DatatypeHelper.isIP(subscriptionManAddr)) {
		areDatatypesValid = false;
		errorMessageArr[4] = "Subscription Manager Address must be an IP"
	}
	
	if (areDatatypesValid) {
		var dataArr = [portNum, latitude, longitude, address, subscriptionManAddr];
		var tagArr = ["PORT", "LATITUDE", "LONGITUDE", "ADDRESS", "SUBMANADDR"];
		
		var xmlString = XMLHelper.generateXMLFile(dataArr, tagArr, "ENVELOPE");

		res.send("<xmp>" + (xmlString) + "</xmp>");
		console.log(xmlString); 
	} else {
		res.render('form.jade', {ErrorMessages:{portError: errorMessageArr[0], latitudeError: errorMessageArr[1], longitudeError: errorMessageArr[2], addressError: errorMessageArr[3], subManAddrError: errorMessageArr[4]}});
	}
	//TODO: Post request called after each area is filled?
	//TODO: Send final xml to the server to be processed.
});

app.listen(3000);


