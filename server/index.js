const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use('/thumbs', express.static(__dirname + "/../client/images/thumbs-up.svg"));


const db = {};

app.get('/likes', (req, res) => {
  res.status(200).send(db);
});

app.post('/like', (req, res) => {
  const name = req.body.name;
  db[name] = 1;
  res.sendStatus(201);
});

app.put('/like', (req, res) => {
  const name = req.body.name;
  db[name]++;
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});