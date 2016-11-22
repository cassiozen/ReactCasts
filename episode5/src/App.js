import React, { Component, PropTypes } from 'react';
import Panel from './components/Panel';
import Locale from './locales/Locale';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.locale = new Locale('en');
  }
  static childContextTypes = {
    locale: PropTypes.object
  }

  state = {
    currentLocale: 'en'
  }

  componentWillUpdate(nextProps, nextState) {
    this.locale.setLanguage(nextState.currentLocale);
  }

  getChildContext() {
    return {locale: this.locale}
  }

  changeLocale(locale){
    this.setState({currentLocale: locale})
  }

  render() {
    return (
      <div>
        <nav>
          <a onClick={() => this.changeLocale('en')}>🇺🇸</a>
          <a onClick={() => this.changeLocale('pt')}>🇧🇷</a>
        </nav>
        <Panel />
      </div>
    );
  }
}

export default App;
