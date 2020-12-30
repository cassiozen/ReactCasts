import React, { Component, Children } from 'react';

class Parent extends Component {
  render() {
    const buttons = Children.map(this.props.children, child => (
      <button>
        {child}
      </button>
    ));
    return (
      <div>
        <h1>Total Children: { Children.count(this.props.children) }</h1>
        {buttons}
      </div>
    )
  }
}

export default Parent;
