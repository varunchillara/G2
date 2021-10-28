const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use('/thumbs', express.static(__dirname + "/../client/images/thumbs-up.svg"));


const db = {};

app.get('/likes', (req, res) => {
  try {
    res.status(200).send(db);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post('/like', (req, res) => {
  try {
    const name = req.body.name;
    db[name] = 1;
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.put('/like', (req, res) => {
  try {
    const name = req.body.name;
    db[name]++;
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});