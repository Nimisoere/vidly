const winston = require("winston");
const mongoose = require("mongoose");

require("winston-mongodb");
const logger = winston.createLogger({
  transports: [
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly"
    })
  ]
});
module.exports = function() {
  mongoose
    .connect("mongodb://localhost/vidly", { useNewUrlParser: true })
    .then(logger.info("Connected to MongoDB"));
};
