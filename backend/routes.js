const pool = require('./db')

module.exports = function routes(app, logger) {
  // GET /
  app.get('/', (req, res) => {
    res.status(200).send('Go to 0.0.0.0:3000.');
  });

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
}