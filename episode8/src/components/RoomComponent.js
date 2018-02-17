import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R1 from '../images/room_1.jpg';
import R2 from '../images/room_2.jpg';
import R3 from '../images/room_3.jpg';
import R4 from '../images/room_4.jpg';

class RoomComponent extends Component {
    
    handleOnClick = () => {
        this.props.onClick(this.props.roomInfo.id);
    }

    render() {
        const { id, roomInfo } = this.props;
        const _image = id == "1" ? R1 : id == "2" ? R2 : id == "3" ? R3 : R4;
        
        return (
            <a href="javascript:void(0)" onClick={this.handleOnClick}>
                {id == 1 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 2 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 3 && <img src={_image} width={250} alt="Redux Hotel" />}
                {id == 4 && <img src={_image} width={250} alt="Redux Hotel" />}
                <div>
                    <h5>{roomInfo.name}</h5>
                    <p>
                        <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg" 
                            width={35} alt="icon" style={{paddingRight: 10}}/>
                        <span style={{marginTop: 20}}>{`${roomInfo.guests} GUESTS`}</span>
                    </p>
                </div>
            </a>
        );
    }
}

RoomComponent.propTypes = {
    
};

export default RoomComponent;

const RoomElement = ({ children, ...props }) => {
    const { id, roomInfo} = this.props;
    const _image = id == 1 ? R1 : id == 2 ? R2 : id == 3 ? R3 : R4;
    return (
        <div>
            <img src={_image} width={250} alt="Redux Hotel" />
            <div>
                <h4> </h4>
            </div>
        </div>
    );
}