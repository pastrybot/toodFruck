import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <h1>Hello</h1>
        </div>
        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
}
export default App;
