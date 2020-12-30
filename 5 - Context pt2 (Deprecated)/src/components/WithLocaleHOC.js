import React, { Component, PropTypes } from 'react';

const WithLocaleHOC = (WrappedComponent) => {
  return class WithLocaleHOC extends Component {
    static contextTypes = {
      locale: PropTypes.object
    }

    componentDidMount() {
      this.context.locale.subscribe(() => this.forceUpdate());
    }

    render() {
      const { locale } = this.context;
      return <WrappedComponent {...this.props} locale={locale} />
    }
  }
}

export default WithLocaleHOC;
