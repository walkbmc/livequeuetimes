// require express
var express = require('express');
var path = require('path');
const Themeparks = require("themeparks");

// configure where SQLite DB sits
// optional - will be created in node working directory if not configured
//Themeparks.Settings.Cache = __dirname + "/ts.db";

var pkDisney = [];
var openClosed = [];
var status = []; 

var MSU = [];
var aLand = [];
var fLand = [];
var fanLand = [];
var lSquare = [];
var tLand = [];

var fWorld = [];
var WS = [];

var EL = [];
var GA = [];
var TS = [];
var AC =[];
var SB = [];
var FA = [];

var africa = [];
var asia = [];
var PL = [];
var DI = [];
var DL = [];
var RPW = [];

var adv = [];
var critter = [];
var NOS = [];
var FL = [];
var MT = [];
var TL = [];
var fantasy = [];
var main = [];

var BVS = [];
var PP = [];
var PGP = [];
var GP = [];
var HL = [];
var cars = [];
var PW = [];

var MST = [];
var AD = [];
var FD = [];
var fanTas = [];
var TD = [];

var TS = [];
var PC = [];
var BL = [];

var disneySea = [];
var toykoDisney = [];
var DS = [];
var disneyHK = [];

// access a specific park
const disneyMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
var disneyEpcot = new Themeparks.Parks.WaltDisneyWorldEpcot();
var disneyHollywood = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
var animalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();

var calDisney = new Themeparks.Parks.DisneylandResortMagicKingdom();
var disneyCalifornia = new Themeparks.Parks.DisneylandResortCaliforniaAdventure();

var disneyparisMagicKingdom = new Themeparks.Parks.DisneylandParisMagicKingdom();
var disneyparisStudios = new Themeparks.Parks.DisneylandParisWaltDisneyStudios();

var disneyShanghai = new Themeparks.Parks.ShanghaiDisneyResortMagicKingdom();
var toykoMagic = new Themeparks.Parks.TokyoDisneyResortMagicKingdom();
var toykoSea = new Themeparks.Parks.TokyoDisneyResortDisneySea();
var HK = new Themeparks.Parks.HongKongDisneyland();

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our disneyworld florida magic kingdom page
router.get('/park1', function(req, res) {

    // access wait times by Promise and copy to an array
    // get wait times for the different specific lands
      const CheckWaitTimes = () => {
     disneyMagicKingdom.GetWaitTimes().then((rideTimes) => {
    
    for(var i=0, ride; ride=rides[i++];) {
       if(ride.id == 'WaltDisneyWorldMagicKingdom_80010230' || ride.id == 'WaltDisneyWorldMagicKingdom_80010165' 
        || ride.id == 'WaltDisneyWorldMagicKingdom_16414579' || ride.id == 'WaltDisneyWorldMagicKingdom_18677928' ) {
          if (ride.status == 'Operating') { //if ride is operating
            MSU.push({name: ride.name, time: ride.status, status: "badge badge-success"});
          }
          else { //if ride is closed
            MSU.push({name: ride.name, time: ride.status, status: "badge badge-danger"});
          }
        }
        else if(ride.id == 'WaltDisneyWorldMagicKingdom_80010153' || ride.id == 'WaltDisneyWorldMagicKingdom_80010196' 
        || ride.id == 'WaltDisneyWorldMagicKingdom_16124144' || ride.id == 'WaltDisneyWorldMagicKingdom_80010210' || 
            ride.id == 'WaltDisneyWorldMagicKingdom_80010177' || ride.id == 'WaltDisneyWorldMagicKingdom_17272158')
        {
          if (ride.waitTime == '0' && ride.status == 'Operating') { //if ride is a non queue type ride
          aLand.push({name: ride.name, time: ride.status, status: "badge badge-success"});
          } else if (ride.status == 'Operating') { //if ride is open then get queue time
          aLand.push({name: ride.name, time: ride.waitTime + " Mins"});
          }
          else { //otherwise ride is closed
            aLand.push({name: ride.name, time: ride.status, status: "badge badge-danger"});
          }
        }
        else if (ride.id == 'WaltDisneyWorldMagicKingdom_2219610' || ride.id == 'WaltDisneyWorldMagicKingdom_80010110' 
        || ride.id == 'WaltDisneyWorldMagicKingdom_80010192' || ride.id == 'WaltDisneyWorldMagicKingdom_80069748' || 
            ride.id == 'WaltDisneyWorldMagicKingdom_80010220' || ride.id == 'WaltDisneyWorldMagicKingdom_80010135')
        {
          if (ride.waitTime == '0' && ride.status == 'Operating') {
          fLand.push({name: ride.name, time: ride.status, status: "badge badge-success"});
          } else if(ride.status == 'Operating') {
              fLand.push({name: ride.name, time: ride.waitTime + " Mins"});
          } 
          else {
            fLand.push({name: ride.name, time: ride.status, status: "badge badge-danger"});
          }
        }
        else if (ride.id == 'WaltDisneyWorldMagicKingdom_80010149' || ride.id == 'WaltDisneyWorldMagicKingdom_80010129' 
        || ride.id == 'WaltDisneyWorldMagicKingdom_80010162' || ride.id == 'WaltDisneyWorldMagicKingdom_80010176' || 
            ride.id == 'WaltDisneyWorldMagicKingdom_16491299' || ride.id == 'WaltDisneyWorldMagicKingdom_16767263'
            || ride.id == 'WaltDisneyWorldMagicKingdom_16767276' || ride.id == 'WaltDisneyWorldMagicKingdom_16767284'
            || ride.id == 'WaltDisneyWorldMagicKingdom_80010213' || ride.id == 'WaltDisneyWorldMagicKingdom_16491297'
            || ride.id == 'WaltDisneyWorldMagicKingdom_16512939' || ride.id == 'WaltDisneyWorldMagicKingdom_80010117'
            || ride.id == 'WaltDisneyWorldMagicKingdom_16767209')
        {
          if (ride.waitTime == '0' && ride.status == 'Operating') {
          fanLand.push({name: ride.name, time: ride.status, status: "badge badge-success"});
          } else if (ride.status == 'Operating') {
                fanLand.push({name: ride.name, time: ride.waitTime + " Mins"});
          }
          else {
            fanLand.push({name: ride.name, time: ride.status, status: "badge badge-danger"});
          }
        }
        else if (ride.id == 'WaltDisneyWorldMagicKingdom_80069754' || ride.id == 'WaltDisneyWorldMagicKingdom_80010208' 
        || ride.id == 'WaltDisneyWorldMagicKingdom_80010160')
        {
          if (ride.waitTime == '0' && ride.status == 'Operating') {
          lSquare.push({name: ride.name, time: ride.status, status: "badge badge-success"});
          } else if (ride.status == 'Operating') {
                  lSquare.push({name: ride.name, time: ride.waitTime + " Mins"});
          }
          else {
            lSquare.push({name: ride.name, time: ride.status, status: "badge badge-danger"});
          }
        }
        else if (ride.id == 'WaltDisneyWorldMagicKingdom_80010107' || ride.id == 'WaltDisneyWorldMagicKingdom_80010114' 
        || ride.id == 'WaltDisneyWorldMagicKingdom_80010190' || ride.id == 'WaltDisneyWorldMagicKingdom_136550' || 
            ride.id == 'WaltDisneyWorldMagicKingdom_5490' || ride.id == 'WaltDisneyWorldMagicKingdom_80010232'||
            ride.id == 'WaltDisneyWorldMagicKingdom_80010222' || ride.id == 'WaltDisneyWorldMagicKingdom_80010224')
        {
          if (ride.waitTime == '0' && ride.status == 'Operating') {
          tLand.push({name: ride.name, time: ride.status, status: "badge badge-success"});
          } else if (ride.status == 'Operating') {
          tLand.push({name: ride.name, time: ride.waitTime + " Mins"});
          }
          else {
            tLand.push({name: ride.name, time: ride.status, status: "badge badge-danger"});
          }
        }
     }
    }).catch((error) => {
        console.error(error);
    }).then(() => {
        setTimeout(CheckWaitTimes, 1000 * 60 * 5); // refresh every 5 minutes
    });
  };
  CheckWaitTimes();
    //, console.error);

  res.render('pages/disney/park1', { MSU: MSU, aLand: aLand, fLand: fLand, fanLand: fanLand, lSquare: lSquare, tLand: tLand, openClosed: openClosed, status: status});
  MSU = [];
  aLand = [];
  fLand = [];
  fanLand = [];
  lSquare = [];
  tLand = [];
  openClosed = [];
  status = [];
});
//CheckWaitTimes();

/*
// get wait times for epcot park
router.get('/park2', function(req, res) {
  
    // access wait times by Promise
    disneyEpcot.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {

      if (ride.name.indexOf('Spaceship')>=0 || ride.name.indexOf('Innoventions')>=0 
        || ride.name.indexOf('Mission')>=0 || ride.name.indexOf('Test Track')>=0 || 
        ride.name.indexOf('The Seas')>=0 || ride.name.indexOf('Soarin')>=0 
        || ride.name.indexOf('Imagination')>=0 || ride.name.indexOf('Living')>=0 || ride.name.indexOf('Crush')>=0) {
             if (ride.waitTime == '0' && ride.status == 'Operating') {
                fWorld.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                fWorld.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                fWorld.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                 } 
              }
              else if (ride.name.indexOf('Gran')>=0 || ride.name.indexOf('Frozen Ever')>=0) {
                if (ride.waitTime == '0' && ride.status == 'Operating') {
                WS.push({name: ride.name, time: ride.status, status: "badge badge-success"});
              } else if (ride.status == 'Operating') {
                WS.push({name: ride.name, time: ride.waitTime + " Mins"});
              } else {
                WS.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                 } 
              }
            }
      }, console.error);
    res.render('pages/disney/park2', { fWorld: fWorld, WS: WS});
    fWorld = [];
    WS = [];
});

// get wait times for hollywood studios florida
router.get('/park3', function(req, res) {

   // access wait times by Promise
    disneyHollywood.GetWaitTimes().then(function(rides) {

        for(var i=0, ride; ride=rides[i++];) {
           if (ride.name.indexOf('Alien')>=0 || ride.name.indexOf('Slinky')>=0 
            || ride.name.indexOf('Mania')>=0) {
               if (ride.waitTime == '0' && ride.status == 'Operating') {
                  TS.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  TS.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  TS.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
              } else if (ride.name.indexOf('Tower')>=0 || ride.name.indexOf('Rock')>=0) {
                  if (ride.waitTime == '0' && ride.status == 'Operating') {
                  SB.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  SB.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  SB.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
              } else if (ride.name.indexOf('Star Tours')>=0 || ride.name.indexOf('Indiana')>=0 
                || ride.name.indexOf('Temple')>=0 || ride.name.indexOf('Path of the')>=0
                || ride.name.indexOf('Forever')>=0) {
                  if (ride.waitTime == '0' && ride.status == 'Operating') {
                  EL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  EL.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  EL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
              }
              else if (ride.name.indexOf('Muppet')>=0) {
                  if (ride.waitTime == '0' && ride.status == 'Operating') {
                  GA.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  GA.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  GA.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
              }
              else if (ride.name.indexOf('Launch Bay')>=0 || ride.name.indexOf('Mermaid')>=0
                || ride.name.indexOf('Walt Disney Present')>=0) {
                  if (ride.waitTime == '0' && ride.status == 'Operating') {
                  AC.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  AC.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  AC.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
              }
            }
      }, console.error);
      
  res.render('pages/disney/park3', { TS: TS, SB: SB, EL: EL, GA: GA, AC: AC });
  TS = [];
  SB = [];
  EL = [];
  GA = [];
  AC = [];
});

// route for our animal kingdom page
router.get('/park4', function(req, res) {

  // access wait times by Promise
    animalKingdom.GetWaitTimes().then(function(rides) {

    for(var i=0, ride; ride=rides[i++];) {
      if (ride.id.indexOf('80010157')>=0 || ride.id.indexOf('80010235')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              africa.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              africa.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              africa.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Everest')>=0 || ride.name.indexOf('Kali River')>=0
            || ride.id.indexOf('80010164')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              asia.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              asia.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              asia.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Avatar')>=0 || ride.name.indexOf('Journey')>=0
            || ride.name.indexOf('Valley')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              PL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              PL.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              PL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Bug')>=0 || ride.name.indexOf('Discovery Island')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              DI.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              DI.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              DI.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('DINOSAUR')>=0 || ride.name.indexOf('Whirl')>=0
            || ride.name.indexOf('Boneyard')>=0 || ride.name.indexOf('Spin')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              DL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              DL.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              DL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Affection')>=0 || ride.name.indexOf('Conservation')>=0
            || ride.name.indexOf('Habitat')>=0 || ride.id.indexOf('17425804')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              RPW.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              RPW.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              RPW.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
        }
      }, console.error);
    
  res.render('pages/disney/park4', { africa: africa, asia: asia, PL: PL, DI: DI, DL: DL, RPW: RPW });
  africa = [];
  asia = [];
  PL = [];
  DI = [];
  DL = [];
  RPW = [];
});

// route for our disneyland california page
router.get('/park5', function(req, res) {

    // access wait times by Promise
    calDisney.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
      if (ride.name.indexOf('Jungle')>=0 || ride.name.indexOf('Indi')>=0
            || ride.name.indexOf('Tiki Room')>=0 || ride.name.indexOf('Tarzan')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              adv.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              adv.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              adv.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Davy')>=0 || ride.name.indexOf('Many')>=0
            || ride.name.indexOf('Splash')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              critter.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              critter.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              critter.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.id.indexOf('18249927')>=0 || ride.id.indexOf('353315')>=0
            || ride.name.indexOf('Pirates')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              NOS.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              NOS.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              NOS.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Big Thunder')>=0 || ride.name.indexOf('Riverboat')>=0
            || ride.name.indexOf('Shootin')>=0 || ride.name.indexOf('Sawyer')>=0
            || ride.name.indexOf('Columbia')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              FL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              FL.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              FL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Chip')>=0 || ride.name.indexOf('Donald')>=0
            || ride.name.indexOf('Gadget')>=0 || ride.name.indexOf('Goofy')>=0
            || ride.name.indexOf('House')>=0 || ride.name.indexOf('Roger')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              MT.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              MT.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              MT.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Astro')>=0 || ride.name.indexOf('Buzz')>=0
            || ride.name.indexOf('Monorail')>=0 || ride.name.indexOf('Nemo')>=0
            || ride.name.indexOf('Jedi')>=0 || ride.id.indexOf('18449559')>=0
            || ride.name.indexOf('Star Tours')>=0 || ride.name.indexOf('Star Wars')>=0
            || ride.name.indexOf('Tomorrowland')>=0 || ride.name.indexOf('Autopia')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              TL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              TL.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              TL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Alice')>=0 || ride.name.indexOf('Casey')>=0
            || ride.name.indexOf('Dumbo')>=0 || ride.id.indexOf('367492')>=0
            || ride.name.indexOf('King')>=0 || ride.name.indexOf('Mad')>=0
            || ride.name.indexOf('Bob')>=0 || ride.name.indexOf('Toad')>=0
            || ride.name.indexOf('Peter')>=0 || ride.name.indexOf('Daring')>=0
            || ride.name.indexOf('Pixie')>=0 || ride.name.indexOf('Fantasy')>=0
            || ride.name.indexOf('Royal')>=0 || ride.name.indexOf('Beauty')>=0
            || ride.name.indexOf('Snow')>=0 || ride.name.indexOf('Storybook')>=0
            || ride.name.indexOf('Sword')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              fantasy.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              fantasy.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              fantasy.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Main')>=0 || ride.name.indexOf('Story')>=0
            || ride.name.indexOf('Dapper')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              main.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              main.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              main.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
        }
      }, console.error);

  res.render('pages/disney/park5', { adv: adv, critter: critter, NOS: NOS, FL: FL, MT: MT, TL: TL, fantasy: fantasy, main: main} );
  adv = [];
  critter = [];
  NOS = [];
  FL = [];
  MT = [];
  TL = [];
  fantasy = [];
  main = [];
});

// route for our disney california adventure page
router.get('/park6', function(req, res) {

  // access wait times by Promise
    disneyCalifornia.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
      if (ride.id.indexOf('16581435')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              BVS.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              BVS.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              BVS.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.id.indexOf('353339')>=0 || ride.id.indexOf('19009994')>=0
            || ride.name.indexOf('Incredicoaster')>=0 || ride.name.indexOf('Toy Story')>=0
            || ride.id.indexOf('353379')>=0 ) {
               if (ride.waitTime == '0' && ride.status == 'Operating') {
                  PP.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  PP.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  PP.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
            } else if (ride.name.indexOf('Goofy')>=0 || ride.name.indexOf('Silly')>=0
            || ride.name.indexOf('Jumpin')>=0 || ride.name.indexOf('Golden')>=0
            || ride.name.indexOf('Mermaid')>=0 || ride.name.indexOf('Color')>=0) {
               if (ride.waitTime == '0' && ride.status == 'Operating') {
                  PGP.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  PGP.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  PGP.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
            } else if (ride.name.indexOf('Grizzly')>=0 || ride.name.indexOf('Redwood')>=0
            || ride.name.indexOf('Soarin')>=0) {
               if (ride.waitTime == '0' && ride.status == 'Operating') {
                  GP.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  GP.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  GP.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
            } else if (ride.name.indexOf('Hollywood')>=0 || ride.name.indexOf('Crush')>=0
            || ride.name.indexOf('Monsters')>=0 || ride.name.indexOf('Guardians')>=0
            || ride.name.indexOf('Animation')>=0 || ride.name.indexOf('Sorcerer')>=0) {
               if (ride.waitTime == '0' && ride.status == 'Operating') {
                  HL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  HL.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  HL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
            } else if (ride.name.indexOf('Radiator')>=0 || ride.name.indexOf('Mater')>=0
            || ride.name.indexOf('Luigi')>=0 ) {
               if (ride.waitTime == '0' && ride.status == 'Operating') {
                  cars.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  cars.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  cars.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
            } else if (ride.name.indexOf('Bakery')>=0 || ride.name.indexOf('Cellar')>=0 ) {
               if (ride.waitTime == '0' && ride.status == 'Operating') {
                  PW.push({name: ride.name, time: ride.status, status: "badge badge-success"});
                } else if (ride.status == 'Operating') {
                  PW.push({name: ride.name, time: ride.waitTime + " Mins"});
                } else {
                  PW.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
                } 
            }
        }
      }, console.error);

  res.render('pages/disney/park6', { BVS: BVS , PP: PP, PGP: PGP, GP: GP, HL: HL, cars: cars, PW: PW});
  BVS = [];
  PP = [];
  PGP = [];
  GP = [];
  HL = [];
  cars = [];
  PW = [];
});

// route for our magic kingdom disneyland paris page
router.get('/park7', function(req, res) {

   // access wait times by Promise
    disneyparisMagicKingdom.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
      if (ride.name.indexOf('Main Street')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              MST.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              MST.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              MST.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Isle')>=0 || ride.name.indexOf('Pirates')>=0
            || ride.name.indexOf('Robinson')>=0 || ride.name.indexOf('Aladdin')>=0
            || ride.name.indexOf('Jungle')>=0 || ride.name.indexOf('Indiana')>=0
            || ride.name.indexOf('Adventure')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              AD.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              AD.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              AD.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Thunder')>=0 || ride.name.indexOf('Mesa')>=0
            || ride.name.indexOf('Roundup')>=0 || ride.name.indexOf('Legends')>=0
            || ride.name.indexOf('Phantom')>=0 || ride.name.indexOf('Frontierland')>=0
            || ride.name.indexOf('Pocahontas')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              FD.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              FD.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              FD.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Fantasyland')>=0 || ride.name.indexOf('Labyrinth')>=0
            || ride.name.indexOf('Blanche')>=0 || ride.name.indexOf('Carrousel')>=0
            || ride.name.indexOf('Pooh')>=0 || ride.name.indexOf('Casey')>=0
            || ride.name.indexOf('Mickey')>=0 || ride.name.indexOf('Galerie')>=0
            || ride.name.indexOf('Château')>=0 || ride.name.indexOf('small')>=0
            || ride.name.indexOf('Tea Cup')>=0 || ride.name.indexOf('Pays')>=0
            || ride.name.indexOf('Peter')>=0 || ride.name.indexOf('Dragon')>=0
            || ride.name.indexOf('Pinocchio')>=0 || ride.name.indexOf('Sword')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              fanTas.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              fanTas.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              fanTas.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Buzz')>=0 || ride.name.indexOf('Orbitron')>=0
            || ride.name.indexOf('Autopia')>=0 || ride.name.indexOf('Nautilus')>=0
            || ride.name.indexOf('Discoveryland')>=0 || ride.name.indexOf('Star')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              TD.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              TD.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              TD.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
        }
      }, console.error);

  res.render('pages/disney/park7', { MST: MST, AD: AD, FD: FD, fanTas: fanTas, TD: TD });
  MST = [];
  AD = [];
  FD = [];
  fanTas = [];
  TD = [];
});

// route for our disneyland paris hollywood studios page
router.get('/park8', function(req, res) {

  // access wait times by Promise
    disneyparisStudios.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
      if (ride.name.indexOf('Animation')>=0 || ride.name.indexOf('Cars')>=0
        || ride.name.indexOf('Crush')>=0 || ride.name.indexOf('Flying')>=0
        || ride.name.indexOf('Flying')>=0 || ride.name.indexOf('Cars')>=0
        || ride.name.indexOf('RC')>=0 || ride.name.indexOf('Slinky')>=0
        || ride.name.indexOf('Toy')>=0 || ride.name.indexOf('Ratatouille')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              TS.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              TS.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              TS.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Studio')>=0 || ride.name.indexOf('Twilight')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              PC.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              PC.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              PC.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          } else if (ride.name.indexOf('Rock')>=0 || ride.name.indexOf('Effets')>=0) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              BL.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              BL.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              BL.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
        }
      }, console.error);

  res.render('pages/disney/park8', {TS: TS, PC: PC, BL: BL});
  TS = [];
  PC = [];
  BL = [];
});

// placeholder route for our shanghai park page
router.get('/park9', function(req, res) {

  // access wait times by Promise
    disneyShanghai.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              DS.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              DS.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              DS.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
      }, console.error);

  res.render('pages/disney/park9', {DS: DS});
  DS = [];
});

// placeholder route for our toyko magic kingdom park park page
router.get('/park10', function(req, res) {

  // access wait times by Promise
    toykoMagic.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              toykoDisney.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              toykoDisney.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              toykoDisney.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
      }, console.error);

  res.render('pages/disney/park10', {toykoDisney: toykoDisney});
  toykoDisney = [];
});

// placeholder route our toyko disney sea park
router.get('/park11', function(req, res) {

    // access wait times by Promise
    toykoSea.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              disneySea.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              disneySea.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              disneySea.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
      }, console.error);

  res.render('pages/disney/park11', {disneySea: disneySea});
  disneySea = [];
});

// placeholder route for our hong kong park page
router.get('/park12', function(req, res) {

  // access wait times by Promise
    HK.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
           if (ride.waitTime == '0' && ride.status == 'Operating') {
              disneyHK.push({name: ride.name, time: ride.status, status: "badge badge-success"});
            } else if (ride.status == 'Operating') {
              disneyHK.push({name: ride.name, time: ride.waitTime + " Mins"});
            } else {
              disneyHK.push({name: ride.name, time: ride.status, status: "badge badge-danger"})
            } 
          }
      }, console.error);

  res.render('pages/disney/park12', {disneyHK: disneyHK});
  disneyHK = [];
});*/
