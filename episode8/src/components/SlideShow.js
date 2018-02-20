import React, { Component } from 'react';
import PropTypes from 'prop-types';

import background from './background.jpg';
import background2 from '../images/Resort2.PNG';
import './SlideShow.css';



class SlideShow extends Component {
  render() {
    const { ImageId } = this.props;
    let _image;
    console.log(`Render SlideShow >>> ${ImageId}`);

    _image = ImageId == 1 ? background : background2;

    return (
      <div className="slideshow">
        <img src={_image} alt="..." />
      </div>
    );
  }
}

SlideShow.propTypes = {

};

export default SlideShow;
