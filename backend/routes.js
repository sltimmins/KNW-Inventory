const pool = require('./db')

module.exports = function routes(app, logger) {
  // GET /
  app.get('/', (req, res) => {
    res.status(200).send('Go to 0.0.0.0:3000.');
  });

  // Add an item to the inventory
  app.post('/add', (req, res) => {
    const name = req.body.name;
    const quantity = req.body.quantity || undefined;
    const locker = req.body.locker || undefined;

    const sql = "INSERT INTO inventory (name, quantity, locker) VALUES (?, ?, ?)";

    pool.query(sql, [name, quantity, locker], (err, results) => {
      if (err) {
        logger.error("Error adding item to inventory: \n", err);
        res
          .status(400)
          .send({ success: false, msg: "Error adding item to inventory" });
      } else {
        res
          .status(200)
          .send({ success: true, msg: "Item successfully added to inventory" });
      }
    })
  })

  // Get all items in inventory
  app.get('/inventory', (req, res) => {
    pool.query("SELECT name, quantity, locker FROM inventory", (err, results) => {
      if(err) {
        logger.error("Error retrieving inventory information: \n", err);
        res.status(400)
           .send({ success: false, msg: "Error retrieving inventory information" });
      } else {
        res.status(200)
           .send({ success: true, data: results});
      }
    })
  })

  app.put('/ordered/', (req, res) => {

    const arrivalDate = req.body.arrivalDate;

    const sql = "UPDATE inventory SET onOrder = true, orderArrivalDate = ? WHERE id = ?";

    pool.query(sql, [arrivalDate, req.param('id')], (err, result) => {
      if(err) {
        logger.error("Error updating order information: \n", err);
        res.status(400)
           .send({ success: false, msg: "Error updating order information" });
      } else {
        res.status(200)
           .send({ success: true, msg: "Updated order information for item" })
      }
    })
  })

  app.put('/arrived/', (req, res) => {

    const arrivalDate = req.body.arrivalDate;

    const sql = "UPDATE inventory SET onOrder = false, orderArrivalDate = NULL WHERE id = ?";

    pool.query(sql, [req.param('id')], (err, result) => {
      if(err) {
        logger.error("Error updating order information: \n", err);
        res.status(400)
           .send({ success: false, msg: "Error updating order information" });
      } else {
        res.status(200)
           .send({ success: true, msg: "Updated order information for item" })
      }
    })
  })

  app.get('/item/', (req, res) => {

    const sql = "SELECT * FROM inventory WHERE id = ?";

    pool.query(sql, [req.param('id')], (err, result) => {
      if(err) {
        logger.error("Error retrieving item information: \n", err);
        res.status(400)
           .send({ success: false, msg: "Error retrieving item information" });
      } else {
        res.status(200)
           .send({ success: true, data: result })
      }
    })
  })

  app.put('/increaseQuantity/', (req, res) => {

    const change = req.body.change;

    const sql = "UPDATE inventory SET quantity = quantity + ? WHERE id = ?";

    pool.query(sql, [change, req.param('id')], (err, result) => {
      if(err) {
        logger.error("Error updating quantity: \n", err);
        res.status(400)
           .send({ success: false, msg: "Error updating quantity" });
      } else {
        res.status(200)
           .send({ success: true, msg: "Updated quantity for item" })
      }
    })
  })

  app.put('/decreaseQuantity/', (req, res) => {

    const change = req.body.change;

    const sql = "UPDATE inventory SET quantity = quantity - ? WHERE id = ?";

    pool.query(sql, [change, req.param('id')], (err, result) => {
      if(err) {
        logger.error("Error updating quantity: \n", err);
        res.status(400)
           .send({ success: false, msg: "Error updating quantity" });
      } else {
        res.status(200)
           .send({ success: true, msg: "Updated quantity for item" })
      }
    })
  })

  app.put('/changeLocker/', (req, res) => {

    const newLocker = req.body.newLocker;

    const sql = "UPDATE inventory SET locker = ? WHERE id = ?";

    pool.query(sql, [newLocker, req.param('id')], (err, result) => {
      if(err) {
        logger.error("Error updating locker: \n", err);
        res.status(400)
           .send({ success: false, msg: "Error updating locker" });
      } else {
        res.status(200)
           .send({ success: true, msg: "Updated locker for item" })
      }
    })
  })
}