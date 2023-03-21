const User = require('../models/User');

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      res.status(400).json({ message: 'User not found!' });
    }

    if (response.ok) {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getUser = getUser;
