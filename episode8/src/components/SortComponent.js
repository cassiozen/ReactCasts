import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortComponent extends Component {

    handleOnChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const { selectedSort } = this.props;
        console.log("Render SortComponent >>>");

        return (
            <select value={selectedSort} onChange={this.handleOnChange} >
                <option value="NONE">NONE</option>
                <option value="ROOM">ROOMS</option>
                <option value="GUESTS">GUESTS</option>
            </select>
        );
    }
}

SortComponent.propTypes = {

};

export default SortComponent;