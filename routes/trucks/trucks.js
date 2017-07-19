var async = require('async');
var Truck =  require('../../models/truckModel');
var User = require('../../models/user');


exports.getAll = (req, res) => {
   Truck.find()
   .exec((err, data) => {
      if(err) throw err;
      res.send({data})
    })
  };
exports.makeNew = (req, res) => {
 var newTruck = new Truck();
 newTruck.loadData(req.body);
 //newTruck.truckOwner=req.user._id;
 console.log(newTruck)
 newTruck.save(function(err, savedTruck){
   if(err){
    console.log(err)
   }else{
     User.findById(req.body.truckOwner, function (err, user){
       if (!user) return res.status(404);
       user.local.truck = req.body.truckOwner;
       user.save(function(e){
         if(e){
           console.log(e);
           res.status(500).send(e)
         }else{
           res.json({message: 'truck user created', user});
         }
       })


     })
    }
  })
}
exports.getById = (req, res) => {
   Truck.findById(req.params.truck_id)
   .exec((err, data) => {
      if (err) throw err;
       res.send(data);
     })
   }
exports.edit = (req, res) => {
  Truck.findById( req.params.truck_id, function (err, truck) {
    if (!truck) return res.status(404);
    truck.loadData(req.body);
    truck.save(function(e) {
      if (e) {
        res.status(500).send(e)
      } else {
        res.json({ message: 'Truck updated!', truck});
      }
    })
  })
}
exports.remove = (req, res) => {
  Truck.remove({_id: req.params.truck_id}, function(err) {
    if (err) {
      console.log("is the truck deleted?");
      res.send(err);
    } else {

      res.send("Truck deleted");

    }
  })
}
