import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";

class UserController {
  static userRegister = async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = await UserModel.find({ email: email });
      if (user) {
        res.send({
          status: "failed",
          message: "Email Already Exits.",
        });
      } else {
        const doc = UserModel({
          name: name,
          email: email,
        });
        await doc.save();
        res.send({ name, email, mobile_number, password });
      }
    } catch {
      res.send({ message: "error" });
    }
  };

  static userLogin = async (req, res) => {
    res.send({ message: "Success" });
  };
}

export default UserController;
