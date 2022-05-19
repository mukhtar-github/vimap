const createVehicle = async (req, res) => {
  return res.send("create vehicle");
};

const deleteVehicle = async (req, res) => {
  return res.send("delete vehicle");
};

const getAllVehicles = async (req, res) => {
  return res.send("get all vehicles");
};

const updateVehicle = async (req, res) => {
  return res.send("update vehicle");
};

const showStats = async (req, res) => {
  return res.send("show vehicle's status");
};

export {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
  showStats,
};
