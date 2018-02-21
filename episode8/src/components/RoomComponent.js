import React, { Component } from 'react';
import PropTypes from 'prop-types';
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


class RoomComponent extends Component {

    handleOnClick = () => {
        this.props.onClick(this.props.roomInfo.id);
    }

    render() {
        const { id, roomInfo } = this.props;
        var _image = id == "1" ? R1 : id == "2" ? R2 : id == "3" ? R3 : id == "4" ? R4 : id == "5" ? R5 : R6;
        _image = id == "7" ? R7 : id == "8" ? R8 : id == "9" ? R9 : _image;

        console.log(`Render RoomComponent >>> ${id}`);
        return (
            <a href="javascript:void(0)" onClick={this.handleOnClick}>
                {id == 1 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 2 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 3 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 4 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 5 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 6 && <img src={_image} width={250} alt="Redux Hotel" />}

                {id == 7 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 8 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 9 && <img src={_image} width={250} alt="Redux Hotel" />}
                <div>
                    <h5>{roomInfo.name}</h5>
                    <p>
                        <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg"
                            width={35} alt="icon" style={{ paddingRight: 10 }} />
                        <span style={{ marginTop: 20 }}>{`${roomInfo.guests} GUESTS`}</span>
                    </p>
                </div>
            </a>
        );
    }
}

RoomComponent.propTypes = {

};

export default RoomComponent;
