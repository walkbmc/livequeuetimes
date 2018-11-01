// require express
var express = require('express');
var path = require('path');
var Themeparks = require("themeparks");


var HHN = [];
var PC = [];
var NYC = [];
var SF = [];
var HP = [];
var WE = [];
var WW = [];

var MSH = [];
var TL = [];
var SI = [];
var JP = [];
var PH = [];
var LC = [];
var SL = [];

var holWood = [];
var HHN1 = [];

var singa = [];
var volcanob = [];

// access a specific park
var UniversalStudios = new Themeparks.Parks.UniversalStudiosFlorida();
var universalIslands = new Themeparks.Parks.UniversalIslandsOfAdventure();
var hollyWood = new Themeparks.Parks.UniversalStudiosHollywood();
var universalSingapore = new Themeparks.Parks.UniversalStudiosSingapore();
var volcano = new Themeparks.Parks.UniversalVolcanoBay();

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our universal studios florida page
router.get('/park13', function(req, res) {

      // access wait times by Promise
      UniversalStudios.GetWaitTimes().then(function(rides) {
          // print each wait time
          for(var i=0, ride; ride=rides[i++];) {
           if (ride.name.indexOf('Carnival')>=0 || ride.name.indexOf('Dead')>=0
            || ride.name.indexOf('Myers')>=0 || ride.name.indexOf('Poltergeist')>=0
            || ride.name.indexOf('ScaryTales')>=0 || ride.name.indexOf('Seeds')>=0
            || ride.name.indexOf('Sinema')>=0 || ride.name.indexOf('Stranger')>=0
            || ride.name.indexOf('Horrors')>=0 || ride.name.indexOf('Trick')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                HHN.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                HHN.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                HHN.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else if (ride.name.indexOf('Despicable')>=0 || ride.name.indexOf('Shrek')>=0
            || ride.name.indexOf('Rip Ride')>=0 || ride.name.indexOf('Transformers')>=0
            || ride.name.indexOf('Music Plaza')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                PC.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                PC.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                PC.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else if (ride.name.indexOf('Revenge')>=0 || ride.name.indexOf('Blues')>=0
            || ride.name.indexOf('Delancey')>=0 || ride.name.indexOf('Jimmy')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                NYC.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                NYC.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                NYC.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else if (ride.name.indexOf('Supercharged')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                SF.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                SF.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                SF.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else if (ride.name.indexOf('Potter')>=0 || ride.name.indexOf('Hogwarts')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                HP.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                HP.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                HP.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else if (ride.name.indexOf('Alien')>=0 || ride.name.indexOf('Simpsons')>=0
            || ride.name.indexOf('Kang')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                WE.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                WE.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                WE.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else if (ride.name.indexOf('E.T.')>=0 || ride.name.indexOf('Woody')>=0
            || ride.name.indexOf('George')>=0 || ride.name.indexOf('Playland')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                WW.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                WW.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                WW.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } 
         }
      }, console.error);

  res.render('pages/universal/park13', {HHN: HHN, PC: PC, NYC: NYC, SF: SF, HP: HP, WE: WE, WW: WW});
  HHN = [];
  PC = [];
  NYC = [];
  SF = [];
  HP = [];
  WE = [];
  WW = [];
 
});

// route for our universal studios islands of adventure
router.get('/park14', function(req, res) {

  // access wait times by Promise
      universalIslands.GetWaitTimes().then(function(rides) {
          // print each wait time
          for(var i=0, ride; ride=rides[i++];) {
            if (ride.name.indexOf('Spider-Man')>=0 || ride.name.indexOf('Hulk')>=0
            || ride.name.indexOf('Fearfall')>=0 || ride.name.indexOf('Storm Force')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                MSH.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                MSH.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                MSH.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else if (ride.name.indexOf('Ripsaw')>=0 || ride.name.indexOf('Popeye')>=0
            || ride.name.indexOf('Ship')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                TL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                TL.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                TL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
          } else if (ride.name.indexOf('Skull')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                SI.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                SI.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                SI.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
          } else if (ride.name.indexOf('Jurassic')>=0 || ride.name.indexOf('Pteranodon')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                JP.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                JP.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                JP.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
          } else if (ride.name.indexOf('Harry Potter')>=0 || ride.name.indexOf('Hogwarts')>=0
            || ride.name.indexOf('Flight')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                PH.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                PH.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                PH.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
          } else if (ride.name.indexOf('Poseidon')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                LC.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                LC.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                LC.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
          } else if (ride.name.indexOf('Cat')>=0 || ride.name.indexOf('One Fish')>=0
            || ride.name.indexOf('Caro')>=0 || ride.name.indexOf('Seuss')>=0
            || ride.name.indexOf('Zoo')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                SL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                SL.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                SL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
          }
        }
      }, console.error);
      res.render('pages/universal/park14', {MSH: MSH, TL: TL, SI: SI, JP: JP, PH: PH, LC: LC, SL: SL});
      MSH = [];
      TL = [];
      SI = [];
      JP = [];
      PH = [];
      LC = [];
      SL = [];
});

// place holder route
router.get('/park15', function(req, res) {

  // access wait times by Promise
volcano.GetWaitTimes().then(function(rides) {
    // print each wait time
    for(var i=0, ride; ride=rides[i++];) {
        if (ride.waitTime == '0' && ride.status == 'Operating') {
                volcanob.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                volcanob.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                volcanob.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
      }
    }, console.error);

      res.render('pages/universal/park15', {volcanob: volcanob});
      volcanob = [];

});

// route for universal studios hollywood page
router.get('/park16', function(req, res) {

  hollyWood.GetWaitTimes().then(function(rides) {
    // print each wait time
    for(var i=0, ride; ride=rides[i++];) {
           if (ride.name.indexOf('Carnival')>=0 || ride.id.indexOf('UniversalStudiosHollywood_13938')>=0
            || ride.name.indexOf('Meyers')>=0 || ride.name.indexOf('Poltergeist')>=0
            || ride.name.indexOf('Dreadtime')>=0 || ride.name.indexOf('Purge')>=0
            || ride.name.indexOf('Universal')>=0 || ride.name.indexOf('Stranger')>=0
            || ride.name.indexOf('Horrors')>=0 || ride.name.indexOf('Trick')>=0) {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                HHN1.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                HHN1.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                HHN1.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           } else {
              if (ride.waitTime == '0' && ride.status == 'Operating') {
                holWood.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                holWood.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                holWood.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
           }
         }
      }, console.error);


      res.render('pages/universal/park16', {HHN1: HHN1, holWood: holWood});
      HHN1 = [];
      holWood = [];
});

// place holder route
router.get('/park17', function(req, res) {

  // access wait times by Promise
universalSingapore.GetWaitTimes().then(function(rides) {
    // print each wait time
    for(var i=0, ride; ride=rides[i++];) {
        if (ride.waitTime == '0' && ride.status == 'Operating') {
                singa.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                singa.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                singa.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
              }
      }
    }, console.error);

      res.render('pages/universal/park17', {singa: singa});
      singa = [];
});


