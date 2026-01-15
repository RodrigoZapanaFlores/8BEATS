const { Beat, Comment } = require("../models");

const createError = require("http-errors");

module.exports.isOwnedByUser = (req, res, next) => {
  const { id } = req.params;
  Beat.findById(id)
    .then((beat) => {
      if (beat?.owner == req.user?.id) {
        req.beat = beat;
        next();
      } else if (beat) {
        next(createError(403, "Nooooo puedeeeees paasaaaaar"));
      } else {
        next(createError(404, "Beat not found"));
      }
    })
    .catch(next);
};

module.exports.isCommentOwnedByUser = (req, res, next) => {
  const { commentId } = req.params;

  Comment.findById(commentId)
    .then((comment) => {
      if (comment) {
        if (comment.user === req.user.id) {
          req.comment = comment;
          next();
        } else {
          next(createError(403, "Nooooo puedeeeees paasaaaaar"));
        }
      } else {
        next(createError(404, "Beat not found"));
      }
    })
    .catch(next);
};



/*const Beat = require("../models/beat.model");
const Comment = require("../models/comment.model");
const createError = require("http-errors");

module.exports.isOwnedByUser = (req, res, next) => {
  const { id } = req.params;
  Beat.findById(id)
    .then((beat) => {
      if (beat?.owner == req.user?.id) {
        req.beat = beat;
        next();
      } else if (beat) {
        next(createError(403, "Nooooo puedeeeees paasaaaaar"));
      } else {
        next(createError(404, "Beat not found"));
      }
    })
    .catch(next);
};

module.exports.isCommentOwnedByUser = (req, res, next) => {
  const { commentId } = req.params;

  Comment.findById(commentId)
    .then((comment) => {
      if (comment) {
        if (comment.user == req.user.id) {
          req.comment = comment;
          next();
        } else {
          next(createError(403, "Nooooo puedeeeees paasaaaaar"));
        }
      } else {
        next(createError(404, "Beat not found"));
      }
    })
    .catch(next);
};

*/