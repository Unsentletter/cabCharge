const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.json());

// Routes

require('./routes/sendMail')(app);

// Config for routing on heroku
if (process.env.NODE_ENV === 'production') {
  // Make sure express will serve up production assets, like main.js file or main.css
  app.use(express.static('client/build'));

  // Express will serve up index.html file if it doesnt recognise the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`app is runing on port ${PORT}`);