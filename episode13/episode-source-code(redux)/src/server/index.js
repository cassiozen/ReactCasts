import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import configureStore from "../shared/configureStore";
import App from "../shared/App";
import "source-map-support/register";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/api/news", (req, res) => {
  res.json([
    {
      id: 1,
      upvotes: 130,
      title: "Fianto Duri, the complete tutorial",
      author: "RubeusH",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 2,
      upvotes: 126,
      title: "Ordinary Wizarding Levels study guide",
      author: "BathBabb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 3,
      upvotes: 114,
      title: "Is muggle-baiting ever acceptable?",
      author: "Falco",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 4,
      upvotes: 97,
      title: "Untransfiguration classes to become compulsory at Hogwarts",
      author: "Baddock",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 5,
      upvotes: 85,
      title: "Cracking the Aurologist Interview ",
      author: "Hetty",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 6,
      upvotes: 74,
      title: "Conserving waterplants cheatsheet.",
      author: "Otto",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 7,
      upvotes: 66,
      title: "The Pragmatic Dragon Feeder",
      author: "Baruffio",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 8,
      upvotes: 50,
      title: "The complete quidditch statistics",
      author: "Hbeery",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 9,
      upvotes: 34,
      title: "Cracking the Aurologist Interview ",
      author: "Marcusb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 10,
      upvotes: 29,
      title: "Could wizards prevent WW3?",
      author: "Cuthbert",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 11,
      upvotes: 20,
      title: "ASK WN: What do you use to digitalize your scrolls?",
      author: "Alphard",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 12,
      upvotes: 16,
      title: "Show WN: Wand-Extinguishing Protection",
      author: "Humphrey22",
      date: new Date("2017-04-14T15:30:00.000Z")
    }
  ]);
});

app.get("*", (req, res, next) => {
  const store = configureStore();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const initialData = store.getState();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>W Combinator</title>
            <link rel="stylesheet" href="/css/main.css">
            <script src="/bundle.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
