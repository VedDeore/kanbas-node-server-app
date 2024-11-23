import model from "./model.js";
export const createUser = (user) => {
  delete user._id;
  return model.create(user);
};
export const findAllUsers = () => {
  return model.find();
};

export const findUserById = (userId) => {
  return model.findById(userId);
};

export const findUserByUsername = (username) => {
  return model.findOne({ username: username });
};

export const findUserByCredentials = (username, password) => {
  return model.findOne({ username, password });
};

export const updateUser = (userId, user) => {
  return model.updateOne({ _id: userId }, { $set: user });
};

export const deleteUser = (userId) => {
  return model.deleteOne({ _id: userId });
};

export const findUsersByRole = (role) => {
  return model.find({ role: role });
};

export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};
