
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world! Your Node.js app is live!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
