import React, { Component } from 'react';
import PropTypes from 'prop-types';

import background from './background.jpg';
import './SlideShow.css';
import R1 from '../images/room_1.jpg';
import R2 from '../images/room_2.jpg';
import R3 from '../images/room_3.jpg';
import R4 from '../images/room_4.jpg';
import R5 from '../images/room_2.jpg';
import R6 from '../images/room_1.jpg';

//suties from 7-9;
import R7 from '../images/Suit1.PNG';
import R8 from '../images/Suit2.PNG';
import R9 from '../images/Suit3.PNG';


class SelectedRoomComponent extends Component {
    render() {
        const { roomInfo } = this.props;
        let _image;
        console.log(`Render SelectedRoomComponent >>> ${roomInfo && roomInfo.imageId || 0}`);

        if (!!roomInfo) {
            const id = roomInfo.imageId;
            _image = id == "1" ? R1 : id == "2" ? R2 : id == "3" ? R3 : id == "4" ? R4 : id == "5" ? R5 : R6;
            _image = id == "7" ? R7 : id == "8" ? R8 : id == "9" ? R9 : _image;
        }

        if (!(_image)) {
            _image = background;
        }

        return (
            <div className="slideshow">
                <img src={_image} alt="..." />
                {
                    (!!roomInfo) && (
                        <div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h5>{roomInfo.name}</h5>
                                    <p>
                                        <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg"
                                            width={35} alt="icon" style={{ paddingRight: 10 }} />
                                        <span style={{ marginTop: 20 }}>{`${roomInfo.guests} GUESTS`}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        {roomInfo.description}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn btn-default"> Book now </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

SelectedRoomComponent.propTypes = {

};

export default SelectedRoomComponent;
