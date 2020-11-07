const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const port = 3000;

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});
