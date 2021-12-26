const get = require("./get");
const detail = require("./detail");
const post = require("./post");
const patch = require("./patch");
const remove = require("./remove");
const main = require("./main");
const postLike = require("./postLike");
const deleteLike = require("./deleteLike");
const postScrap = require("./postScrap");
const deleteScrap = require("./deleteScrap");
const search = require("./search");
const postReply = require("./postReply");
const patchReply = require("./patchReply");
const removeReply = require("./removeReply");

module.exports = {
  get,
  detail,
  post,
  patch,
  remove,
  main,
  postLike,
  deleteLike,
  postScrap,
  deleteScrap,
  search,
  postReply,
  patchReply,
  removeReply,
};
