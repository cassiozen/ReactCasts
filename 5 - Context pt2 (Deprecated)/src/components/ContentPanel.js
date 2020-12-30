import React, { Component, PropTypes } from 'react';
import WithLocaleHOC from './WithLocaleHOC';

class ContentPanel extends Component {
  static propTypes = {
    locale: PropTypes.object
  }
  render() {
    const { locale } = this.props;
    return (
      <div className="contentPanel">
        <h1>{locale.strings.header}</h1>
        <p>
          {locale.strings.text}
        </p>
        <button>{locale.strings.buttonLabel}</button>
        <footer>ContentPanel.js</footer>
      </div>
    );
  }
}

export default WithLocaleHOC(ContentPanel);
