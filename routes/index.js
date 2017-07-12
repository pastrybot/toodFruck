// blog/routes/in index.js
const express = require('express');
const TruckRoutes = require('./trucks/trucks');
const UserRoutes = require('./auth');

module.exports = (app) => {
  //each call takes 2 aurguments
  app.get('/api/trucks', TruckRoutes.getAll);
  app.get('/api/trucks/:truck_id', TruckRoutes.getById);
  app.post('/api/trucks', TruckRoutes.makeNew);
  app.put('/api/trucks/:truck_id', TruckRoutes.edit);
  app.delete('/api/trucks/:truck_id', TruckRoutes.remove);
  app.post('/api/signup', UserRoutes.post);
  app.post('/api/login', UserRoutes.post);
  app.get('/api/get_user', UserRoutes.get);
}
