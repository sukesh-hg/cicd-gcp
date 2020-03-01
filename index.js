const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('App received a request.');
  res.sendFile(path.join(__dirname+'/templates/index.html'));
  //__dirname : It will resolve to your project folder.
});

const port = process.env.PORT || 8080;
app.use('/', router);
app.listen(port, () => {
  console.log('App listening on port', port);
});
