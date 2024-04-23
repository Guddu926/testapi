const User = require("../model/userSchema");

const create = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json(user); // 201 Created for successful resource creation
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetch = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    if (users.length > 0) return res.status(200).json(users);
    res.status(404).json({
      message: "User collection is empty",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




const update = async (req, res) => {
  try {
    await User.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  create,
  fetch,
  update,
  remove,
};
