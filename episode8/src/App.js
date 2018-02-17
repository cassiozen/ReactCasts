import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideShow from './components/SlideShow';
import { login } from './actions/auth';
import { fetchRooms } from './actions/rooms';
import { selectUserName, selectUserRoom } from './reducers';
import logo from './logo.png';
import './App.css';
import RoomComponent from './components/RoomComponent';

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
        <div className="container-full">
          <div className="container w-100">
            <div className="row">
              <div className="col-md-6 ">
                <div className="row text-right">
                  <div className="col-md-12">
                    <img src={logo} width={250} alt="Redux Hotel" />
                    <h1>Your Reservation</h1>
                    <p>Name: {userName}</p>
                    <h2>Accomodation</h2>
                    <p><em>{accomodation.name}</em></p>
                    <p><img src={accomodation.image} width={300} alt="accomodation" /></p>
                  </div>
                </div>
                <hr className="white" />
                <div className="row ">
                  <div className="col-md-4">
                    <RoomComponent id={1} />
                  </div>
                  <div className="col-md-4">
                    <RoomComponent id={2} />
                  </div>
                  <div className="col-md-4">
                    <RoomComponent id={3} />
                  </div>
                  <div className="col-md-4">
                    <RoomComponent id={4} />
                  </div>
                </div>
                <hr className="white" />
                <div className="row ">
                </div>

              </div>
              <div className="col-md-6">
                <SlideShow />
              </div>

            </div>

          </div>
        </div>
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
