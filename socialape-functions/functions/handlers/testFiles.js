const { db, admin } = require("../util/admin");
const BusBoy = require("busboy");
const path = require("path");
const os = require("os");
const fs = require("fs");

exports.uploadFile = (req, res) => {
  console.log(req.body.file.split(",")[1]);
};
