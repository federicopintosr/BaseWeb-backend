module.exports = {
  HOST: "localhost",
  USER: "fede",
  PASSWORD: "2400",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
