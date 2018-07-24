var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/lab-equip/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('lab-equip').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error occurred'});
      } else {
        res.send(item);
      }      
    });
  });

  app.post('/lab-equip', (req, res) => {
    const equipment = { 
      inventoryNumber: req.body.inventoryNumber, 
      factoryNumber: req.body.factoryNumber,
      title: req.body.title,
      description: req.body.description
    };
    db.collection('lab-equip').insert(equipment, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/lab-equip/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('lab-equip').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error occurred' });
      } else {
        res.send('item: ' + id + ' deleted!');
      }      
    });
  });

  app.put ('/lab-equip/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const equipment = { 
      inventoryNumber: req.body.inventoryNumber, 
      factoryNumber: req.body.factoryNumber,
      title: req.body.title,
      description: req.body.description
    };
    db.collection('lab-equip').update(details, equipment, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(equipment);
      } 
    });
  });
};