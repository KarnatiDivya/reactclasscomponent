import React from 'react';

export default class Component2 extends React.Component {
  constructor() {
    super();
    this.state = {
      greetings: "Hello, Good Evening!"
    };
    this.greetings = this.greetings.bind(this);
  }

  greetings() {
    this.setState({ greetings: "Hello, Had Coffee?" });
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{this.state.greetings}</h2>
        <button onClick={this.greetings}>Click Me</button>
      </div>
    );
  }
}
