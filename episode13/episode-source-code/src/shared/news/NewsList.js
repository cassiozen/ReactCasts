import React, { Component } from "react";
import timeAgo from "node-time-ago";
import orderBy from "lodash.orderBy";
import w18 from "./w18.png";
import "./NewsList.css";

class NewsList extends Component {
  state = {
    sortOrder: "upvotes"
  };

  setOrder(order, event) {
    event.preventDefault();
    this.setState({ sortOrder: order });
  }

  render() {
    const news = orderBy(this.props.news, this.state.sortOrder, "desc");

    return (
      <div className="newslist">
        <div className="header">
          <div className="header-title">
            <img src={w18} width="18" height="18" className="logo" />
            <strong>Wizard News</strong>
          </div>
          <div className="sort">
            Sort By:{" "}
            <a
              href="#"
              className={this.state.sortOrder === "upvotes" && "sort-selected"}
              onClick={this.setOrder.bind(this, "upvotes")}>
              Upvotes
            </a>|
            <a
              href="#"
              className={this.state.sortOrder === "date" && "sort-selected"}
              onClick={this.setOrder.bind(this, "date")}>
              Date
            </a>
          </div>
        </div>

        {news &&
          news.map(post =>
            <div key={post.id} className="news-item">
              <p>
                <span className="news-position">{post.id}. ▲</span> {post.title}{" "}
                <small>(by {post.author})</small>
              </p>
              <small className="news-details">
                {post.upvotes} upvotes | {timeAgo(post.date)}
              </small>
            </div>
          )}
      </div>
    );
  }
}

export default NewsList;
