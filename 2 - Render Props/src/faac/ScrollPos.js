import React, { Component, PropTypes } from 'react';

class ScrollPos extends Component {

  static proptypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    position: null
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getBounds = (element) => {
    if (this.bounds) return;
    this.bounds = element && element.getBoundingClientRect();
  }

  handleScroll = (event) => {
    const windowSize = window.innerHeight;
    const scrollTop = event.srcElement.body.scrollTop;
    const visibleSpace = windowSize + (this.bounds.bottom - this.bounds.top);
    let visibleRatio = ((windowSize + scrollTop) - this.bounds.top + this.bounds.height)/visibleSpace;

    if (visibleRatio < 0) visibleRatio = 0;
    if (visibleRatio > 1) visibleRatio = 1;

    this.setState({position: visibleRatio})
  }

  render() {
    return (
      <div ref={this.getBounds}>{
        this.props.children(this.state.position)
      }</div>
    )
  }
}

export default ScrollPos;
