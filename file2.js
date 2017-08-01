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
