const { Beat, Like } = require("../models");

const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Beat.find()
    .then((beats) => res.json(beats))
    .catch((error) => next(error));
};


module.exports.create = (req, res, next) => {
  Beat.create({
    title: req.body.title,
    owner: req.body.owner,
    social: req.body.social,
    description: req.body.description,
    bpms: req.body.bpms,
    machine: req.body.machine,
    categories: req.body.categories,
    email: req.body.email
  })
    .then((beat) => res.status(201).json(beat))
    .catch(next);
};

  
module.exports.detail = (req, res, next) => {
  Beat.findById(req.params.id)
    .then((beat) => {
      if (beat) {
        res.json(beat);
      } else {
        next(createError(404, "Beat not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Beat.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      categories: req.body.categories,
      bpms: req.body.bpms,
      url: req.body.bpms
    },
    {
      new: true,
      runValidarors: true,
    }
  )
    .then((beat) => {
      if (beat) {
        res.json(beat);
      } else {
        next(createError(404, "Beat not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Beat.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.like = (req, res, next) => {
  const detail = {
    user: req.user.id,
    stream: req.params.id,
  };


  Like.findOne(detail)
    .then((like) => {
      if (like) {
        return Like.deleteOne(detail);
      } else {
        return Like.create(detail);
      }
    })
    .then(() => Like.count(detail))
    .then((likes) => res.json({ likes }))
    .catch(next);
};


