const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const routerApi = require("./routes/index");
const { checkApiKey } = require("./middlewares/authHandler");
require("./utils/auth/index");

const app = express();
require("dotenv").config();
const {
  errorHandler,
  logErrors,
  boomHandler,
} = require("./middlewares/errorHandler");

// server config 😀
app.use(express.json());
app.use(cors());
app.set("strict routing", true);

routerApi(app);
app.use([logErrors, boomHandler, errorHandler]);

// routes 🤖
// app.use("/", (req, res) => {
//   res.json({
//     message: " HOME DE LA PÁGINA CLARO QUE SÍ",
//     emojiOfTheDay: "😃",
//   });
// });
app.use("/home", checkApiKey, (req, res) => {
  res.json({
    message: "PÁGINA DE INICIO slash home",
    emojiOfTheDay: "😃",
  });
});

app.listen(PORT, () => {
  console.log("SERVER VIVO visita http://localhost:3000");
});
