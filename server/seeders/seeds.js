const { User, Product, ProductStat } = require('../models');
const { dataUser, dataProduct, dataProductStat } = require('../data');
const db = require('../config/connection');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(dataUser);
    await Product.deleteMany({});
    await Product.insertMany(dataProduct);
    await ProductStat.deleteMany({});
    await ProductStat.insertMany(dataProductStat);

    console.log('Seeding done');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
