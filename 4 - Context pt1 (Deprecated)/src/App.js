import React, { Component, PropTypes } from 'react';
import Panel from './components/Panel';
import './App.css';

import en from './locales/en.json';
import pt from './locales/pt.json';

const locales = {en, pt};

class App extends Component {
  static childContextTypes = {
    locale: PropTypes.object
  }

  state = {
    currentLocale: 'en'
  }

  getChildContext() {
    return {locale: locales[this.state.currentLocale]}
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
