var mongoose = require('mongoose');

var TruckSchema = new mongoose.Schema({
    //schema = blueprint
    name: { required: true, type: String },
    lat: Number,
    lng: Number,
    hours: String,
    open: Boolean,
    description: String,
    img: String,
    website: String,
    facebook: String,
    twitter: String,
    instagram: String
  



    //brackets denote that we're starting reference to something
    //array is a an array of note model ids
    //setting type to be mongoose object ID
    //then next argument sets up what it's referencing i.e. what we called
    //it in the export in the model the data-type name
});

TruckSchema.methods.loadData = function(data){
  this.name        = data.name ? data.name : this.name;
  this.lat         = data.lat ? data.lat : this.lat;
  this.lng         = data.lng ? data.lng : this.lng;
  this.hours       = data.hours ? data.hours : this.hours;
  this.open        = data.open ? data.open : this.open;
  this.description = data.description ? data.description : this.description;
  this.facebook    = data.facebook ? data.facebook : this.facebook;
  this.twitter     = data.twitter ? data.twitter : this.twitter;
  this.instagram   = data.instagram ? data.instagram : this.instagram;
  this.img         = data.img ? data.img : this.img;

}
TruckSchema.methods.loadLocation= function(powerN){

  this.location.push(powerN);
}

module.exports = mongoose.model('Truck', TruckSchema);
