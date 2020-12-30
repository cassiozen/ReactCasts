import React, { Component } from 'react';
import InternalPanel from './InternalPanel';
import WithLocaleHOC from './WithLocaleHOC';

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <InternalPanel />
        <footer>{this.props.locale.strings.footer} Panel.js</footer>
      </div>
    );
  }
}

export default WithLocaleHOC(Panel);
