const { Beat, Like } = require("../models");

const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Beat.find()
    .populate('owner' )
    .then((beats) => res.json(beats))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const beat = req.body;
  delete beat.views;
  beat.owner = req.user.id;
  beat.audio = req.file.path;

  Beat.create(beat)
    .then((beat) => res.status(201).json(beat))
    .catch(next);
};

  
module.exports.detail = (req, res, next) => {
  Beat.findById(req.params.id)
    .populate('owner')
    .then((beat) => {
      if (beat) {
        res.json(beat);
      } else {
        next(createError(404, "beat not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  const data = req.body;
  delete data.views;
  delete data.owner;

  const beat = Object.assign(req.beat, data);
  Beat.save()
    .then((beat) => res.json(beat))
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
    beat: req.params.id,
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


