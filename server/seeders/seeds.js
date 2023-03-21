const { User } = require('../models');
const { dataUser } = require('../data');
const db = require('../config/connection');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(dataUser);

    console.log('Seeding done');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
