import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.png';

class RoomContainer extends Component {
    render() {
        return (
            <div className="App">
                <div className="main">
                    <img src={logo} width={250} alt="Redux Hotel" />
                </div>
                {/* <SlideShow /> */}
            </div>
        );
    }
}

RoomContainer.propTypes = {

};

export default RoomContainer;