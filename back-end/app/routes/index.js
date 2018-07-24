const noteRoutes = require('./lab-equip_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
};