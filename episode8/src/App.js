import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideShow from './components/SlideShow';
import { login } from './actions/auth';
import { fetchRooms } from './actions/rooms';
import { selectUserName, selectUserRoom } from './reducers';
import logo from './logo.png';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { login, fetchRooms } = this.props;
    login();
    fetchRooms();
  }

  render() {
    const { isFetching, userName, accomodation } = this.props;
    if (isFetching || isFetching === undefined) return <div className="loader" />;
    return (
      <div className="App">
        <div className="main">
          <img src={logo} width={250} alt="Redux Hotel" />
          <h1>Your Reservation</h1>
          <p>Name: {userName}</p>
          <h2>Accomodation</h2>
          <p><em>{accomodation.name}</em></p>
          <p><img src={accomodation.image} width={300} alt="accomodation"/></p>
        </div>
        <SlideShow />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, rooms } = state;
  const isFetching = auth.isFetching || rooms.isFetching;
  

  return {
    isFetching,
    userName: selectUserName(state),
    accomodation: selectUserRoom(state)
  };
};

const mapDispatchToProps = { login, fetchRooms };

export default connect(mapStateToProps, mapDispatchToProps)(App);
