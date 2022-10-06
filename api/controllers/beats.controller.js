const Beat = require('../models/beat.model');

module.exports.list = (req, res, next) => {
  Beat.find()
    .then((beats) => res.json(beats))
    .catch((error) => next(error));
};
module.exports.create = (req, res, next) => {
  Beat.create({
    thumbnail: req.body.thumbnail,
    category: req.body.category,
    url: req.body.url,
    author: req.body.author,
    description: req.body.description,
    title: req.body.title,
  })
    .then((beat) => {
      res.status(201).json(beat);
    })
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
  Beat.findByIdAndUpdate(
    req.params.id,
    {
      thumbnail: req.body.thumbnail,
      category: req.body.category,
      url: req.body.url,
      author: req.body.author,
      description: req.body.description,
      title: req.body.title,
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((beat) => {
      if (beat) {
        res.json(beat);
      } else {
        next(createError(404, "beat not found"));
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