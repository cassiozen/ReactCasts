import React, { Component } from 'react';

const LoadingHOC = (WrappedComponent) => {
  return class LoadingHOC extends Component {
    setReference = (wrappedComponentRef) => {
      this.wrappedComponentRef = wrappedComponentRef;
    }

    saveState = () => {
      localStorage.setItem(this.wrappedComponentRef.constructor.name, JSON.stringify(this.wrappedComponentRef.state));
    }

    retrieveState = () => {
      const savedState = localStorage.getItem(this.wrappedComponentRef.constructor.name);
      this.wrappedComponentRef.updater.enqueueSetState(this.wrappedComponentRef, JSON.parse(savedState))
    }

    render() {
      const props = Object.assign({}, this.props, {ref: this.setReference})
      return (
        <div>
          <WrappedComponent {...props}/>
          <button onClick={this.saveState}>Save State</button>
          <button onClick={this.retrieveState}>Retrieve State</button>

        </div>
      )

    }
  }
}


export default LoadingHOC;
