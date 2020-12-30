import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../ducks";
import NewsList from "./NewsList";

class News extends Component {
  static initialAction() {
    return fetchNews();
  }

  componentDidMount() {
    if (!this.props.news) {
      this.props.dispatch(News.initialAction());
    }
  }

  render() {
    const { news } = this.props;
    return <NewsList news={news} />;
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps)(News);
