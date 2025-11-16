import { loginUser, registerUser } from "../../services/user-service.js";

export const home = (req, res) => {
  res.send("<h1>home</h1>");
};
export const login = async (req, res) => {
  const userInfo = req.body;
  try {
    const doc = await loginUser(userInfo);
    if (doc && doc._id) {
      res.json({
        message: "Login SuccessFully ",
        id: doc._id,
        email: doc.email,
      });
    } else {
      res.json({ message: "Invalid Email or password" });
    }
  } catch (error) {
    res.json({ error: "Error,Login failed" });
    console.log(error);
  }
};
export const register = async (req, res) => {
  const userInfo = req.body;
  try {
    const doc = await registerUser(userInfo);
    res.json({ message: "Register SuccessFully ", id: doc._id });
  } catch (error) {
    res.json({ error: "Error,Register failed" });
    console.log(error);
  }
};
