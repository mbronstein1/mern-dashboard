const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

/* CONFIGURATION */
const app = express();
app.use(express.json());
app.use(helmet());
// Allows us to make cross origin sharing requests
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/', routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
});
