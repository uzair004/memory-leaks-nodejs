const express = require('express');
const EventEmitter = require('events');

const app = express();
const emitter = new EventEmitter();

app.get('/leak', (req, res) => {
  let bigData = new Array(500000).fill('leak');

  function onEvent() {
    console.log('Event received with data size:', bigData.length);
  }

  emitter.on('data', onEvent); // Listener added but never removed

  res.send('Listener added');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
