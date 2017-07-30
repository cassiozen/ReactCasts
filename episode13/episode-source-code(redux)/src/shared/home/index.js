import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import wizards from "./wizards.jpg";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <img src={logo} />
        </header>
        <aside>
          <p className="selected">About</p>
          <p>
            <Link to="/news">Wizard News</Link>
          </p>
        </aside>
        <article>
          <h1>W Combinator created a new model for funding early stage wizardry.</h1>
          <p>
            Twice a year we invest a small amount of mana in a large number of wizards (recently
            105).
          </p>
          <p>
            The wizards move to the Highlands of Scotland for 3 months, during which we work
            intensively with them to get the magic into the best possible shape and refine their
            pitch to patrons. Each cycle culminates in Demo Day, when the wizards present their
            magic to a carefully selected, invite-only audience.
          </p>
          <p>
            But WC doesn’t end on Demo Day. We and the WC alumni network continue to help mages for
            the life of their magic, and beyond.
          </p>
        </article>
        <figure>
          <img src={wizards} />
        </figure>
      </div>
    );
  }
}

export default Home;
