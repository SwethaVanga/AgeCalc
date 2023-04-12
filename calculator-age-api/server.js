const express = require("express");
const cors = require("cors");
const { calculateAge } = require("./controllers/age");
const app = express();
const port = 3131;

app.use(cors());
app.get("/age/calculate", calculateAge);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
