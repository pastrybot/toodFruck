// blog/routes/in index.js
const express = require('express');
const TruckRoutes = require('./trucks/trucks');

module.exports = (app) => {
  //each call takes 2 aurguments
  app.get('/api/trucks', TruckRoutes.getAll);
  app.get('/api/trucks/:trucks_id', TruckRoutes.getById);
  app.post('/api/trucks', TruckRoutes.makeNew);
  app.put('/api/trucks/:trucks_id', TruckRoutes.edit);
  app.delete('/api/trucks/:trucks_id', TruckRoutes.remove);
}
