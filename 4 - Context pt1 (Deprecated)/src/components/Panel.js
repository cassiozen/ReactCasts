import React, { Component } from 'react';
import InternalPanel from './InternalPanel';

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <InternalPanel />
        <footer>Panel.js</footer>
      </div>
    );
  }
}

export default Panel;
