import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomInfoComponent extends Component {
    render() {
        return (
            <div id="about-hotel" className="mt-3 col-xs-12 col-sm-12 col-md-12 col-centered center-block">
                <div className="row">
                    <div className="title text-center">
                        <h6>Accomodation</h6>
                        <h3>Our Rooms & Suites</h3>
                        <div className="col-xs-6 col-sm-4 col-md-4 cap col-centered center-block">
                            <span>
                                <img alt="" src="http://themesquared.com/hotelier/wp-content/themes/hotelier/framework/builder/modules/heading/cap.png"
                                    className="img-responsive" />
                            </span>
                        </div>
                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi versa accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit</p>        </div>
                </div>
            </div>
        );
    }
}

RoomInfoComponent.propTypes = {

};

export default RoomInfoComponent;