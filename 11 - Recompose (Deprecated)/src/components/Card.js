import React from 'react';
import { withState, withHandlers, compose } from 'recompose';
import './Card.css';


const Card = ({opened, handleClick, title, picture, description}) => {
  return (
    <div className={ opened ? "card open" : "card closed" }>
      <div className="header" onClick={handleClick}>{title}</div>
      <div className="body">
        <img src={picture} />
        <p>{description}</p>
      </div>
    </div>
  );
}

const enhance = compose(
  withState('opened', 'setOpened', true),
  withHandlers({
    handleClick: props => event => {
      props.setOpened(!props.opened)
    },
  })
)



export default enhance(Card);

