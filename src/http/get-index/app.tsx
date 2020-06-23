import React, { Component } from "https://unpkg.com/es-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
    }
  }
}

type Props = {};

type State = {
  time: Date;
};
//@ts-ignore in app.tsx
export class App extends Component<Props, State> {
//@ts-ignore in app.tsx
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    //@ts-ignore
    this.setState({
      time: new Date(),
    });
  }

  render() {
    //@ts-ignore
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>;
  }
}
