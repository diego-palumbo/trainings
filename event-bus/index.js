const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', async (req, res) => {
  try {
    const event = req.body;
    events.push(event);
    console.log(`Event ${JSON.stringify(event)}`);
    await axios.post('http://posts:4000/events', event);
    res.send({ status: 'OK' });
  } catch (error) {
    res.send({ status: 'Error' });
  }

});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
