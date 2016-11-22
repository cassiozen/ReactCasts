import en from './en.json';
import pt from './pt.json';

const locales = {en, pt};

class Locale {
  constructor(language) {
    this.strings = locales[language];
    this.subscriptions = [];
  }

  setLanguage(language) {
    this.strings = locales[language];
    this.subscriptions.forEach(cb => cb());
  }

  subscribe(callback) {
    this.subscriptions.push(callback);
  }
}

export default Locale;
