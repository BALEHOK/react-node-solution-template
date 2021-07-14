import cors = require('cors');
import express = require('express');
import path = require('path');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ping
app.get('/ping', (req, res) => res.send('pong'));

// api
// app.post('/api/action', async (req, res) => {
// });

// web UI app
const webUiAppPath = '/app';
const webUiDirectory = path.join(__dirname, '../../../../web-ui/build');
app.use(webUiAppPath, express.static(webUiDirectory));
app.get(`${webUiAppPath}/*`, function (req, res) {
  res.sendFile(path.join(webUiDirectory, 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port);

// eslint-disable-next-line no-console
console.log('SERVER LISTENING on port ' + port);
