import React, { Component } from "react";
import styled from "styled-components";

const AnimatedDivy = styled.div`
  transition: all 0.4s ease-in-out;
  width: 400px;
  height: ${props => props.height}px;
  background: ${props => props.background};
  opacity: ${props => props.opacity};
`;

class CssAnimation extends Component {
  state = {
    opacity: 0.4,
    height: 40,
    background: "teal"
  };

  handleClick = () =>
    this.setState({
      opacity: this.state.opacity === 0.4 ? 1 : 0.4,
      height: this.state.height === 40 ? 400 : 40,
      background: this.state.background === "teal" ? "purple" : "teal"
    });

  render() {
    return (
      <AnimatedDivy
        onClick={this.handleClick}
        opacity={this.state.opacity}
        height={this.state.height}
        background={this.state.background}
      >
        click here
      </AnimatedDivy>
    );
  }
}

export default CssAnimation;
