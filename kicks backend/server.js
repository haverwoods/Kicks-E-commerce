const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("server is live");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// install steup supabase , add routes , controllers, models, services
