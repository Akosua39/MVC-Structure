const { Router } = require("express");
const { login, register } = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter.get("/login", login);
usersRouter.get("/register", register);

module.exports = usersRouter;
