import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterComponent extends Component {

    handleOnChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const { selectedFilter } = this.props;
        console.log("Render FilterComponent >>>");

        return (
            <select value={selectedFilter} onChange={this.handleOnChange} >
                <option value="ALL">ALL</option>
                <option value="ROOMS">ROOMS</option>
                <option value="SUITES">SUITES</option>
            </select>

        );
    }
}

FilterComponent.propTypes = {

};

export default FilterComponent;