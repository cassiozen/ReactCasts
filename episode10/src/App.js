import React, { Component } from 'react';
import { Dropdown, Segment } from 'semantic-ui-react'
import Auth from './components/Auth';
import BookDetails from './components/BookDetails';

class App extends Component {
  state = {
    selectedId: null
  }
  render() {
    return (
      <div>
        <Auth />
        { this.state.selectedId ?
          <BookDetails id={this.state.selectedId} />
        : 
          <Segment>
          <Dropdown
            placeholder='Select a Book'
            options={[
              { text: 'Harry Potter', value: 1 },
              { text: 'Lord of the Rings', value: 2 },
              { text: 'Game of Thrones', value: 3 },
              { text: 'Sherlock Holmes', value: 4 },
              { text: 'Murder in the Orient Express', value: 5 },
              { text: 'Neuromancer', value: 6 },
              { text: 'Ready Player One', value: 7 },
            ]}
            onChange={(e, selected)=> this.setState({selectedId: selected.value})}
            fluid
            search
            selection
          />
          </Segment>
        }
      </div>
    );
  }
}

export default App;
