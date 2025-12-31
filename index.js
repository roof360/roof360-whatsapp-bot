import express from "express";
import bodyParser from "body-parser";
import twilio from "twilio";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Roof360 WhatsApp Bot is running ✅");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running");
});
