const express = require("express");
const path = require("path");

const app = express();

const expressHbs = require("express-handlebars");

const homeRouter = require("./routes/home");

const mathHelpers = require("./helpers/hbs/math");
const compareHelpers = require("./helpers/hbs/compare");
const customHelpers = require("./helpers/hbs/custom");

app.engine(
  "hbs",
  expressHbs({
    helpers: {
      multiplication: mathHelpers.Multiplication,
      differenceValue: compareHelpers.DifferenceValue,
      blockNumbers: customHelpers.BlockNumbers,
    },
  })
);

app.set("view engine","hbs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));

app.use(homeRouter);

app.use("/", function(req,res,next){

    res.status(404).render("404", {layout: false});

});

app.listen(5001);