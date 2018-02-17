import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R1 from '../images/room_1.jpg';
import R2 from '../images/room_2.jpg';
import R3 from '../images/room_3.jpg';
import R4 from '../images/room_4.jpg';

class RoomComponent extends Component {
    render() {
        const { id } = this.props;
        return (
            <div>
                {id == 1 && <img src={R1} width={250} alt="Redux Hotel" />}
                {id == 2 && <img src={R2} width={250} alt="Redux Hotel" />}
                {id == 3 && <img src={R3} width={250} alt="Redux Hotel" />}
                {id == 4 && <img src={R4} width={250} alt="Redux Hotel" />}
                <div>
                    <h3> Double Room </h3>
                    <p>
                        <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg" 
                            width={35} alt="icon" style={{paddingRight: 10}}/>
                        <span>2 GUESTS </span>
                    </p>
                </div>
            </div>
        );
    }
}

RoomComponent.propTypes = {

};

export default RoomComponent;

const RoomElement = ({ children, ...props }) => {
    const { id } = this.props;
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