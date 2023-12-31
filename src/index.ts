import express from "express";
import morgan from "morgan";

import { engine } from 'express-handlebars'
import path from "path";
import route from "./routes/route";
import('reflect-metadata');

const app = express();
const port = 5000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.engine('hbs', engine({
    defaultLayout: "main",
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  }));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources", "views"));
route(app);

app.use((req, res, next) => {
  res.render('error/pages-error',{layout: false});
});
//127.0.0.1 -localhost
app.listen(port, () => {
  console.log(` App listening on port http://localhost:` + `${port}`);
});

