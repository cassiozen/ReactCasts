import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const zombies = [
  {
    title: "Classic zombies",
    picture: `${process.env.PUBLIC_URL}/pictures/classic.jpg`,
    description:
      "Slow, quiet and clumsy, the reason for these dead to reanimate is unknown. After a zombie apocalypse, all dead humans turn into zombies. Being bitten by a zombie results in illness and death. Can only be killed by massive brain trauma.",
  },
  {
    title: "Fast Zombies",
    picture: `${process.env.PUBLIC_URL}/pictures/fast.jpg`,
    description:
      "Fresh ones might look like regular people and in some cases it could be hard to tell. What they gain in speed and fervor over their slower cousins, they lose in durability, as they can be killed by wounds to the chest, bleeding out, thirst or starvation.",
  },
  {
    title: "Intelligent Zombies",
    picture: `${process.env.PUBLIC_URL}/pictures/intelligent.jpg`,
    description:
      "These zombies have intelligence and personality, although some are easily distracted by bright lights. They are able to speak, organize around a leader, use guns or swords and even plan to overcome barricades and set traps.",
  },
  {
    title: "Voodoo Zombies",
    picture: `${process.env.PUBLIC_URL}/pictures/voodoo.jpg`,
    description:
      "Created by a magic potion that kills humans, allowing a Voodoo Master to revive them to do his bidding.\nBlank, emotionless and able to withstand gunshots, these zombies can only function while there’s a connection with their master.",
  },
  {
    title: "Walkers / Biters",
    picture: `${process.env.PUBLIC_URL}/pictures/walkers-biters.jpg`,
    description:
      "A virus is carried by every human being. When the person dies, the virus activates a part of the brain that turns people into zombies. Walkers don’t breathe, so they will chase under water, but they're unintelligent and unable to use weapons.",
  },
  {
    title: "Thriller Zombies",
    picture: `${process.env.PUBLIC_URL}/pictures/thriller.jpg`,
    description:
      "The dangerous thing about Thriller zombies is their coordination. Sure, any other type of zombies will eventually gravitate to form a mob, but Thriller zombies will eat your brains as a matching synchronised horde.",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App zombies={zombies} />
  </React.StrictMode>,
  document.getElementById("root")
);
