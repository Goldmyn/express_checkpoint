import express from "express";
import nodemon from "nodemon";
import fs from "node:fs";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(morgan(":date"));


app.use((req, res, next) => {
  let now = new Date(); // Get the current date and time
  let options = { timeZone: "Africa/Lagos", hour: "2-digit", hour12: false };

  // Get the current hour in Nigeria
  let currentHour = new Date().toLocaleString("en-US", options).split(":")[0];
  let currentDay = now.toLocaleString("en-US", {
    timeZone: "Africa/Lagos",
    weekday: "narrow",
  });

  // Check online status
  let onlineStatus =
    currentHour >= 9 &&
    currentHour <= 17 &&
    currentDay !== "S" &&
    currentDay !== "S";

  console.log(onlineStatus);

  if (onlineStatus) {
    return next();
  }

  res.send(
    `Sorry We are offline at the moment we are active from ${onlineStatus}`
  );
});

app.get("/home", (req, res) => {
  const getPage = fs.readFileSync("public/home.html", "utf-8");
  res.status(200).send(getPage);
});

app.get("/service", (req, res) => {
  const getPage = fs.readFileSync("public/service.html", "utf-8");
  res.status(200).send(getPage);
});

app.get("/contact", (req, res) => {
  const getPage = fs.readFileSync("public/contact.html", "utf-8");
  res.status(200).send(getPage);
});

app.listen(port, () => {
  console.log("Server started");
});
