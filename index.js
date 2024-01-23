import express from "express";
import { engine } from "express-handlebars";
import { loadMovie, loadMovies } from "./static/movies.js";
import fs from "fs/promises";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

const MENU = [
  {
    label: "Index",
    link: "/",
  },
  {
    label: "Filmer",
    link: "/filmer",
  },
  {
    label: "Om oss",
    link: "/about-us",
  },
  {
    label: "Evenemang",
    link: "/event",
  },
  {
    label: "English",
    link: "/english",
  },
];

async function renderPage(response, page) {
  const currentPath = page == "index" ? "/" : `/${page}`;

  response.render(page, {
    menuItems: MENU.map((item) => {
      return {
        active: currentPath == item.link,
        label: item.label,
        link: item.link,
      };
    }),
  });
}
app.use("/assets", express.static("assets"));

app.get("/", async (request, response) => {
  renderPage(response, "index");
});
app.get("/filmer", async (req, res) => {
  const movies = await loadMovies();
  res.render("filmer", { movies });
});

app.get("/filmer/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  res.render("movie", { movie });
});

app.get("/about-us", async (request, response) => {
  renderPage(response, "about-us");
});

app.get("/event", async (request, response) => {
  renderPage(response, "event");
});

app.get("/english", async (request, response) => {
  renderPage(response, "English");
});

app.use("/static", express.static("./static"));

app.listen(5080);