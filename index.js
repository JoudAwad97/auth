const express = require("express");

const app = express();
const PORT = 3000;

app.get("/auth/user", (req, res) => {
  const currentDate = new Date();
  console.log(`reached user auth at ${currentDate}`);
  if (req.headers["x-auth-header"] === "allow") {
    return res.status(200).json({ message: "allowed" });
  }
  return res.status(401).json({ message: "not allowed to enter" });
});

app.get("/auth/admin", (req, res) => {
  const currentDate = new Date();
  console.log(`reached admin auth at ${currentDate}`);
  if (req.headers["x-auth-header"] === "allow") {
    return res.status(200).json({ message: "allowed" });
  }
  return res.status(401).json({ message: "not allowed to enter" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
