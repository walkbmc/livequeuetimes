// require express
var express = require('express');
var path = require('path');
var Themeparks = require("themeparks");
var pkDisney = [];
var pkUniversal = [];
var pkSixflags = [];
var pkMerlin = [];
var pkCedar = [];
var pkOther = [];
var pkLinks = [];

// create our router object
var router = express.Router();

// export our router
module.exports = router;

for(var i = 1; i<=50;i++) {
  pkLinks[i] = "park" + i;
}

// route for our homepage
router.get('/', function(req, res) {

var pkIndex = 1;

for (var park in Themeparks.Parks) {

	if (new Themeparks.Parks[park]().Name.indexOf('Disney') >=0) {
    pkDisney.push({name: new Themeparks.Parks[park]().Name, link: pkLinks[pkIndex]});
  }
    
  else if (new Themeparks.Parks[park]().Name.indexOf('Universal') >=0) {
    pkUniversal.push({name: new Themeparks.Parks[park]().Name, link: pkLinks[pkIndex]});
  }

  else if (new Themeparks.Parks[park]().Name.indexOf('La Ronde') >=0 || new Themeparks.Parks[park]().Name.indexOf('The Great Escape') >=0
    || new Themeparks.Parks[park]().Name.indexOf('Six Flags') >=0) {
    pkSixflags.push({name: new Themeparks.Parks[park]().Name, link: pkLinks[pkIndex]});
  }

  else if (new Themeparks.Parks[park]().Name.indexOf('Thorpe Park') >=0 || new Themeparks.Parks[park]().Name.indexOf('Alton Towers') >=0
  || new Themeparks.Parks[park]().Name.indexOf('Chessington') >=0) {
    pkMerlin.push({name: new Themeparks.Parks[park]().Name, link: pkLinks[pkIndex]});
  }

  else if (new Themeparks.Parks[park]().Name.indexOf('California') >=0 || new Themeparks.Parks[park]().Name.indexOf('Carowinds') >=0
  || new Themeparks.Parks[park]().Name.indexOf('Canada') >=0 || new Themeparks.Parks[park]().Name.indexOf('Cedar Point') >=0
  || new Themeparks.Parks[park]().Name.indexOf('Kings Island') >=0 || new Themeparks.Parks[park]().Name.indexOf('Knott') >=0) {
    pkCedar.push({name: new Themeparks.Parks[park]().Name, link: pkLinks[pkIndex]});
  }

  else {
    pkOther.push({name: new Themeparks.Parks[park]().Name, link: pkLinks[pkIndex]});
      }

    pkIndex = pkIndex + 1;

    }

  res.render('pages/index', { pkDisney: pkDisney, pkUniversal: pkUniversal, pkSixflags: pkSixflags, pkOther: pkOther, pkMerlin: pkMerlin, pkCedar: pkCedar });
  pkDisney = [];
  pkUniversal = [];
  pkSixflags = [];
  pkMerlin = [];
  pkCedar = [];
  pkOther = [];
  //pkLinks = [];
  //pkIndex = [];
});

// route for our parks page
router.get('/parks', function(req, res) {
  var pkIndex = 1;
  
});

// route for our about
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

// route for our about
router.get('/privacy', function(req, res) {
  res.render('pages/privacy');
}, console.error);

router.post('/contact', function(req, res) {
	//TODO Set it up so that feedback is sent as email
	res.send('Thanks for the feedback, ' + req.body.name + '! We will respond shortly!');
});