const express = require("express");
const router = express.Router();
const beats = require("../controllers/beats.controller");
const comments = require("../controllers/comments.controller");
const auth = require("../controllers/auth.controller");
const secure = require("../middlewares/secure.mid");
const beatsMid = require("../middlewares/beats.mid");

router.post("/register", auth.register);
router.get("/profile", secure.isAuthenticated, auth.profile);
router.post("/authenticate", auth.authenticate);
router.delete("/logout", auth.logout);

//router.get("/users", secure.isAuthenticated, secure.isAdmin, users.getUser);
//router.get("/users/:id", secure.isAuthenticated, users.getUser);


router.get("/beats", secure.isAuthenticated, beats.list);
router.post("/beats/create", secure.isAuthenticated, beats.create);
router.get("/beat/:id", beats.detail);
router.patch(
  "/beats/:id",
  secure.isAuthenticated,
  beatsMid.isOwnedByUser,
  beats.update
);
router.delete(
  "/beats/:id",
  secure.isAuthenticated,
  beatsMid.isOwnedByUser,
  beats.delete
);

router.post("/beats/:id/like", secure.isAuthenticated, beats.like);

router.post("/beats/:id/comments", secure.isAuthenticated, comments.create);
router.patch(
  "/beats/:id/comments/:commentId",
  secure.isAuthenticated,
  beatsMid.isCommentOwnedByUser,
  comments.update
);
router.delete(
  "/beats/:id/comments/:commentId",
  secure.isAuthenticated,
  beatsMid.isCommentOwnedByUser,
  comments.delete
);

module.exports = router;

/*const express = require("express");
const router = express.Router();
const beats = require("../controllers/beats.controller");
const comments = require("../controllers/comments.controller");
const passport = require("passport");
const auth = require("../controllers/auth.controller");
const secure = require("../middlewares/secure.mid");
const beatsMid = require("../middlewares/beats.mid");

router.post("/register", auth.register);
router.get("/profile", secure.isAuthenticated, auth.profile);
router.post("/authenticate", auth.authenticate);
router.get("/authenticate/slack", passport.authorize("Slack"));
router.get("/authenticate/slack/cb", passport.authorize("Slack"), auth.slack);
router.delete("/logout", auth.logout);

router.get("/beats", secure.isAuthenticated, beats.list);
router.post("/beats", secure.isAuthenticated, beats.create);
router.get("/beats/:id", beats.detail);
router.patch(
  "/beats/:id",
  secure.isAuthenticated,
  beatsMid.isOwnedByUser,
  beats.update
);
router.delete(
  "/beats/:id",
  secure.isAuthenticated,
  beatsMid.isOwnedByUser,
  beats.delete
);

router.post("/beats/:id/like", secure.isAuthenticated, beats.like);

router.post("/beats/:id/comments", secure.isAuthenticated, comments.create);
router.patch(
  "/beats/:id/comments/:commentId",
  secure.isAuthenticated,
  beatsMid.isCommentOwnedByUser,
  comments.update
);
router.delete(
  "/beats/:id/comments/:commentId",
  secure.isAuthenticated,
  beatsMid.isCommentOwnedByUser,
  comments.delete
);

module.exports = router;

*/