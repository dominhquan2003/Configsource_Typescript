const express = require("express");
const morgan = require("morgan"); 
const handlebars = require("express-handlebars"); 
const path = require("path");
const route = require("./src/routes/route.ts");
require('reflect-metadata');

const app = express();
const port = 8000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.engine(
  "hbs",
  handlebars.engine({
    defaultLayout: "main",
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);


app.use((req, res, next) => {
  res.render('error/pages-error',{layout: false});
});

//127.0.0.1 -localhost
app.listen(port, () => {
  console.log(` App listening on port http://localhost:` + `${port}`);
});
