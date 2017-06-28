var async = require('async');
var Truck =  require('../../models/truckModel');


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
 newTruck.save(function(err, na){
   if(err){
    console.log(err)
   }else{
     res.json(na)
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
