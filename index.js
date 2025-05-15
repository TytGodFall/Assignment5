
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello There, Using Express.js, Mlira!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
