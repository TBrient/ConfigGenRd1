# ConfigGenRd1

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
   extended: true
}));

app.get('/SunCycleServer', function(req, res) {
	res.render(path.resolve(SUN CYCLE JADE FILE));
});

app.post('/SunCycleServer', function (req, res) {
	var body = req.body;
	var portNumber = body.port;
	var latitude = body.latitude;
	var longitude = body.longitude;
	var address = body.address;
	var subscriptionManAddr = body.submanAddress;
	
	var finalXML = '<ENVELOPE>' + generateXMLLine(portNum, 'PORT') + generateXMLLine(latitude, 'LATITUDE') + generateXMLLine(longitude, 'LONGITUDE') + generateXMLLine(address, 'ADDRESS'), + generateXMLLine(subscriptionManAddr, 'SUBMANADDR') + '</ENVELOPE>'
	//TODO: Post request called after each area is filled?
	//TODO: Send final xml to the server to be processed.
});

function generateXMLLine(data, tag){
	return '<' + tag + '> + data + '</' + tag + '>'
}


FILE2:

html
	h3 Configure below
	form(name="configure", method="post")
		div.input
			span.label Port Number: 
			input(type="text", name="port")
		div.input
			span.label Longitude: 
			input(type="text", name="longitude")
		div.input
			span.label Latitude: 
			input(type="text", name="latitude")	
		div.input
			span.label Address: 
			input(type="text", name="address")
		div.input
			span.label Subscription Manager Address: 
			input(type="text", name="submanAddress")
		div.actions
			input(type="submit", value="Login")
