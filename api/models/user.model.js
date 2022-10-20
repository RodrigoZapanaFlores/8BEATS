const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const WORK_FACTOR = 10;
const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PW_PATTERN = /^.{8,}$/;


const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};



const userSchema = new Schema(
  {
    displayName: {
      type: String,
      required: "Name is required",
      trim: true,
    },
    name: {
      type: String,
      required: "Name is required",
      trim: true,
    },
    email: {
      type: String,
      required: "Email is required",
      trim: true,
      lowercase: true,
      unique: true,
      match: [EMAIL_PATTERN, "Invalid email"],
    },
    password: {
      type: String,
      required: "Password is required",
      match: [PW_PATTERN, "Password needs at least 8 chars"],
    },
    bio: {
      type: String,
      required: 'Biography',
      trim: true
    },

      thumbnail: {
      type: String,
      required: "Thumbnail is required",
      trim: true,
      validate: {
        validator: isURL,
        message: "URL is not valid",
      },
    },
    social: {
      type: String,
      required: 'IG',
      trim: true
    },
    

    city: {
      type: String,
      required: "city is required",
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;

        return ret;
      },
    },
  }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt
      .hash(this.password, WORK_FACTOR)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch(next);
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (passwordToMatch) {
  return bcrypt.compare(passwordToMatch, this.password);
};



userSchema.virtual("beats", {
  ref: "Beat",
  localField: "_id",
  foreignField: "owner",
});

const User = mongoose.model("User", userSchema);
module.exports = User;

