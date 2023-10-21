const express = require("express");

const app = express();
const PORT = 3000;

app.get("/auth/user", (req, res) => {
  if (req.headers["x-auth-header"] === "allow") {
    return res.status(200).json({ message: "allowed" });
  }
  return res.status(401).json({ message: "not allowed to enter" });
});

app.get("/auth/admin", (req, res) => {
  if (req.headers["x-auth-header"] === "allow") {
    return res.status(200).json({ message: "allowed" });
  }
  return res.status(401).json({ message: "not allowed to enter" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
