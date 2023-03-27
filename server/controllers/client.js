const { Product } = require('../models');
const { ProductStat } = require('../models');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(400).json({ message: 'Something went wrong!' });
    }

    // If the product stats were set as a reference to the products in the data,
    // this step would be unnecessary because we could just say .populate to display all
    //connected product stats to their referenced products
    const productsWithStats = await Promise.all(
      products.map(async product => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
