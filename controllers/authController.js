const register = async (req, res) => {
  return res.send("register user");
};

const login = async (req, res) => {
  return res.send("login user");
};

const updateUser = async (req, res) => {
  return res.send("updateUser");
};

export { register, login, updateUser };
