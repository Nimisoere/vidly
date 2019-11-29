const winston = require("winston");
require("winston-mongodb");

const filename = "db-log.log";

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename }),
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly",
      level: "info"
    })
  ]
});

module.exports = function(err, req, res, next) {
  logger.error(err.message, () => err);
  res.status(500).send("Something went wrong");
};
