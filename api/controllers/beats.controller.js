
const Beat = require("../models/beat.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Beat.find()
    .then((beats) => res.json(beats))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const beat = req.body;
  delete beat.views;
  beat.owner = req.user.id;

  Beat.create(beat)
    .then((beat) => res.status(201).json(beat))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Beat.findById(req.params.id)
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
  const stream = req.body;
  delete stream.views;

  Stream.findByIdAndUpdate(
    req.params.id,
    stream,
    {
      new: true,
      runValidators: true,
    }
  )
    .then((stream) => {
      if (stream) {
        res.json(stream);
      } else {
        next(createError(404, "stream not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Beat.findByIdAndDelete(req.params.id)
    .then((beat) => {
      if (beat) {
        res.status(204).send();
      } else {
        next(createError(404, "beat not found"));
      }
    })
    .catch(next);
};








/*const Beat = require("../models/beat.model");
const Like = require("../models/like.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Beat.find()
    .populate("owner", "name email")
    .then((beats) => res.json(beats))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const beat = req.body;
  delete beat.views;
  beat.owner = req.user.id;

  Beat.create(beat)
    .then((beat) => res.status(201).json(beat))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Beat.findById(req.params.id)
    .populate("owner", "name email")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    })
    .populate("likes")
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
  beat
    .save()
    .then((beat) => res.json(beat))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Beat.deleteOne({ _id: req.beat.id })
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

*/