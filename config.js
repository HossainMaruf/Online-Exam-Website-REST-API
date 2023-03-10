require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: process.env.SERVER_PORT,
  MONGO_URL: process.env.MONGO_URL,
  LOCAL_MONGO_URL: process.env.LOCAL_MONGO_URL,
  USER_SECRET: process.env.USER_SECRET
};
