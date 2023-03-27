const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({ message: 'User not found!' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
