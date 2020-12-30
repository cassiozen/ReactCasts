import React from 'react';
import Card from './components/Card';

import Spinner from './components/Spinner';
import { branch, renderComponent, lifecycle, compose } from 'recompose';

const App = ({zombies}) => {
  return (
    <div>
      {
        zombies.map(zombie => (
          <Card
            key={zombie.title}
            title={zombie.title}
            picture={zombie.picture}
            description={zombie.description}
          />
        ))
      }
    </div>
  );
}


const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.checkAuth()
    }
  }),

  branch(
    (props) => props.zombies.length === 0,
    renderComponent(Spinner)
  )
);

export default enhance(App);
