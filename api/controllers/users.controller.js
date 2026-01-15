
const mongoose = require("mongoose")
const createError = require("http-errors");
const { User } = require("../models");


module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => next(error));
};

module.exports.update = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      displayName: req.body.displayName,
      name: req.body.name,
      city: req.body.city,
      bio: req.body.bio,
      social: req.body.social,
      thumbnail: req.body.thumbnail
    },
    {
      new: true,
      runValidarors: true,
    }
  )
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  User.create({
    displayName: req.body.displayName,
    name: req.body.name,
    city: req.body.city,
    bio: req.body.bio,
    social: req.body.social,
    email: req.body.email,
    password: req.body.password
  })
    .then((user) => res.status(201).json(user))
    .catch(next);
};


module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelate(req.params.id)
    .then((user) => {
      if (user) {
        res.status(204).send();
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};
