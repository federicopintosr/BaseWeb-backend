module.exports = {
  HOST: "localhost",
  USER: "desa",
  PASSWORD: "1234",
  DB: "baseweb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
