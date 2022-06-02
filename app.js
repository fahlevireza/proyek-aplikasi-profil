const { format } = require('util');
const express = require('express');
const app = express();
const Multer = require('multer');
const path = require('path');
app.use(express.static(__dirname + '/public'));

const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

app.set('view engine', 'pug');

app.use(express.json());

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const bucket = storage.bucket('process.env.submission-project1.appspot.com');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
