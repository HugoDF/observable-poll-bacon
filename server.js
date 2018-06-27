const express = require('express');
const app = express();


let count = 0;
app.get('/count', (req, res) => {
  count++;
  return res.json({ count });
});
app.get('/reset', (req, res) => {
  count = 0;
  return res.send('Success');
});


app.use(express.static('public'));

app.listen(3000);
