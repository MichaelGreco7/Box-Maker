import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.height}em`,
            backgroundColor: this.props.color
          }}
        ></div>
        <button>X</button>
      </div>
    );
  }
}

export default Box;
