var express = require("express");
var router  = express.Router();
const MyData = require('../database/schema')

//@type:   GET
//@route:  /api/
//@desc:   just for testing
//@access: PUBLIC
router.get('/', (req, res) => {
    res.json({ 'test': ' Auth is being tested' })
});

//@type:   GET
//@route:  /api/data
//@desc:   getting all the battle list  for search box
//@access: PUBLIC
router.get('/data', (req, res) => {
    
    MyData.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data.map(ele => ele.name)};
            }
            res.json(response);
        });
});


//@type:   POST
//@route:  /api/battleinfo
//@desc:   getting all the battle list  for search box
//@access: PUBLIC
router.post('/battleinfo', (req, res) => {
    // const battleName = req.body.name.length > 0 ? req.body.name : "Battle at the Mummer's Ford";
       const battleName =req.body;
       console.log('battleName', battleName); 
    MyData.find(battleName,function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                if (data) {
                    let kingImageFunction = (name) =>{
                        switch (name) {
                            case "Joffrey/Tommen Baratheon":return{
                                "imgID":10
                            }
                            case "Balon/Euron Greyjoy":return{
                                "imgID":14
                            }
                            case "Robb Stark":return{
                                "imgID":12
                            }
                            case "Stannis Baratheon":return{
                                "imgID":13
                            }
                            case "Renly Baratheon":return{
                                "imgID":16
                            }
                            case "Mance Rayder":return{
                                "imgID":15
                            }
                            default: return{
                                "imgID":100
                            }
                        }
                    }
                    response = {
                        "error" : false,
                        "message" : data, 
                        "attackerID": kingImageFunction(data[0].attacker_king), 
                        "defenderID": kingImageFunction(data[0].defender_king)
                    };
                    
                }else{
                    response= {"error" : false,"message" : "Error fetching data"};
                }
            }
            res.json(response);
    });
});

module.exports = router;