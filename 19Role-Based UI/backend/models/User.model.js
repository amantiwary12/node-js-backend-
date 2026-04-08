import mongoose from "mongoose";

/*
  User Schema (Blueprint of user data)
  - email: unique identifier
  - password: hashed password
  - role: user or admin
*/

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"], // allowed values
      default: "user",
    },
  },
  { timestamps: true } // auto add createdAt & updatedAt
);

const User = mongoose.model("User", userSchema);

export default User;