import React, { Component } from 'react';
import ContentPane from './ContentPanel';

class InternalPanel extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="internalPanel">
        <ContentPane />
        <footer>InternalPanel.js</footer>
      </div>
    );
  }
}

export default InternalPanel;
