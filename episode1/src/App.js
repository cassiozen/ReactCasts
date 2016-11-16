import React, { Component } from 'react';
import ContactsApp from './components/ContactsApp';
import './App.css';

class App extends Component {
  state = { contacts: [] }

  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=50')
    .then(response => response.json())
    .then(parsedResponse => parsedResponse.results.map(user => (
      {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail
      }
    )))
    .then(contacts => this.setState({contacts}));
  }

  render() {
    return (
      <div className="App">
        <ContactsApp contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
