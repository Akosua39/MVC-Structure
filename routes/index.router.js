const { Router } = require("express");
const { greet, welcome } = require("../controllers/index.controller");

const indexRouter = Router();

indexRouter.get("/", welcome);
indexRouter.get("/greet", greet);

// indexRouter.get("/", (req, res) =>{
//     res.send("<h1>Hello World!</h1>")
// })
// indexRouter.get("/", (req, res) =>{
//     res.send("<h1>Hello Everyone👋!</h1>")
// })

module.exports = indexRouter;
