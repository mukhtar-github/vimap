const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);
  next();
};

export default auth;
