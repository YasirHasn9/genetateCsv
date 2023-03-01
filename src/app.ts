import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("app");
  console.log(`http://localhost:${port}`);
});
