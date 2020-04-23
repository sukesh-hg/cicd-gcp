require('@google-cloud/trace-agent').start();
const {Logging} = require('@google-cloud/logging');
const express = require('express');
const app = express();
const path = require('path');
const got = require('got');

app.get('/', async (req, res) => {
  projectId = 'niveus-research-project-273009', // Google Cloud Platform project ID
  logName = 'demo' // The name of the log to write to
  const logging = new Logging({projectId});
  const log = logging.log(logName);
  await log.write(log.entry({resource: {type: 'global'},severity: 'INFO'}, 'App recieved a request'));
  try {
    res
      .sendFile(path.join(__dirname+'/templates/index.html'))
      .status(200);
      //__dirname : It will resolve to your project folder.
    await log.write(log.entry({resource: {type: 'global'},severity: 'INFO'}, 'Successfully rendered web page'));
  }
  catch (err) {
    await log.write(log.entry({resource: {type: 'global'},severity: 'ERROR'},'Error'+err));
    res
      .status(500)
      .end();
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('App listening on port', port);
});
