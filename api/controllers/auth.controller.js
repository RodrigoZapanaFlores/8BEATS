const createError = require("http-errors");
const { User } = require("../models");

module.exports.profile = (req, res, next) => {
  res.json(req.user);
};

module.exports.register = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        next(
          createError(400, {
            message: "User validation failed",
            errors: { email: { message: "User already registered" } },
          })
        );
      } else {
        return User.create(req.body).then((user) => res.status(201).json(user));
      }
    })
    .catch(next);
};

module.exports.authenticate = (req, res, next) => {
  function invalidAuthError() {
    next(
      createError(400, {
        message: "User validation failed",
        errors: { email: { message: "Invalid email or password" } },
      })
    );
  }

  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        invalidAuthError();
      } else {
        return user.checkPassword(password).then((match) => {
          if (match) {
            req.session.userId = user.id;
            res.status(201).json(user);
          } else {
            invalidAuthError();
          }
        });
      }
    })
    .catch(next);
};


module.exports.logout = (req, res, next) => {
  req.session.destroy();
  req.session = null;
  res.status(204).send();
};

/*const createError = require("http-errors");
const User = require("../models/user.model");
const mongoose = require("mongoose");

module.exports.profile = (req, res, next) => {
  res.json(req.user);
};

module.exports.register = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        next(
          createError(400, {
            message: "User validation failed",
            errors: { email: { message: "User already registered" } },
          })
        );
      } else {
        return User.create(req.body).then((user) => res.status(201).json(user));
      }
    })
    .catch(next);
};

module.exports.authenticate = (req, res, next) => {
  function invalidAuthError() {
    next(
      createError(400, {
        message: "User validation failed",
        errors: { email: { message: "Invalid email or password" } },
      })
    );
  }

  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        invalidAuthError();
      } else {
        return user.checkPassword(password).then((match) => {
          if (match) {
            req.session.userId = user.id;
            res.status(201).json(user);
          } else {
            invalidAuthError();
          }
        });
      }
    })
    .catch(next);
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  req.session = null;
  res.status(204).send();
};

module.exports.slack = (req, res, next) => {
  const profile = req.account;

  User.findOne({
    social: profile.id,
  })
    .then((user) => {
      if (!user) {
        return User.create({
          name: profile.user.name,
          social: profile.id,
          email: profile.user.email,
          password: mongoose.Types.ObjectId(),
        });
      }

      return user;
    })
    .then((user) => {
      req.session.userId = user.id;
      res.redirect(process.env.WEB_URL);
    })
    .catch(next);
};
*/