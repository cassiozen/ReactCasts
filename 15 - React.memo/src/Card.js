import { useState, useEffect, memo } from "react";
import "./Card.css";

export default memo(function Card({ title, picture, description }) {
  const [opened, setOpened] = useState(true);
  useEffect(() => {
    console.log(`Card Rerendered: ${title}`);
  });

  return (
    <div className={opened ? "card open" : "card closed"}>
      <div className="header" onClick={() => setOpened(!opened)}>
        {title}
      </div>
      <div className="body">
        <img src={picture} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
});
