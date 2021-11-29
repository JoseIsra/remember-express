const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const routerApi = require("./routes/index");
const {
  errorHandler,
  logErrors,
  boomHandler,
} = require("./middlewares/errorHandler");

// server config 😀
app.use(express.json());
app.use(cors());

routerApi(app);
app.use([logErrors, boomHandler, errorHandler]);

// routes 🤖
app.use("/home", (req, res) => {
  res.json({
    message: " HOME DE LA PÁGINA CLARO QUE SÍ",
    emojiOfTheDay: "😃",
  });
});

app.listen(PORT, () => {
  console.log("SERVER VIVO visita http://localhost:3000");
});
