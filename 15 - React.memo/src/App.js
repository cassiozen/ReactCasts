import { useState } from "react";
import Card from "./Card";
import "./App.css";

export default function App({ zombies }) {
  const [counter, setCounter] = useState(0);
  const title = "The Title";
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Brains Saved: {counter}
      </button>
      {zombies.map((zombie) => (
        <Card
          key={zombie.title}
          title={title}
          picture={zombie.picture}
          description={zombie.description}
        />
      ))}
    </div>
  );
}
