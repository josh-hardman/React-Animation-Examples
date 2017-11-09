// https://reactjs.org/docs/animation.html#low-level-api-reacttransitiongroup
// componentWillAppear();
// componentDidAppear();
// componentWillEnter();
// componentDidEnter();
// componentWillLeave();
// componentDidLeave();

import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-transition-group"; // ES6
import FirstChild from "./FirstChild";
import styled from "styled-components";
import { TweenMax } from "gsap";

const items = ["thing1", "thing2", "thing3"];

class Example extends Component {
  state = { open: false };

  handleClick = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div onClick={this.handleClick}>
        clicky
        <ReactTransitionGroup component={FirstChild}>
          {this.state.open ? <MyComponent /> : null}
        </ReactTransitionGroup>
      </div>
    );
  }
}

class MyComponent extends Component {
  state = { opacity: 0.5 };

  componentWillEnter(callback) {
    const el = this.container;
    TweenMax.fromTo(
      el,
      0.3,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, onComplete: callback }
    );
  }

  componentWillLeave(callback) {
    const el = this.container;
    TweenMax.fromTo(
      el,
      0.3,
      { x: 0, opacity: 1 },
      { x: 100, opacity: 0, onComplete: callback }
    );
  }

  render() {
    return <h1 ref={c => (this.container = c)}>Im an animated thingy</h1>;
  }
}

export default Example;
