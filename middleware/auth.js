import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // why, well is it 400 or 404?
    // actually 401
    throw new UnauthenticatedError("Authentication Invalid");
  }
  next();
};

export default auth;
