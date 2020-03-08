// Add BandInput component
import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    let band = {
      name: this.state.name
    };
    this.props.addBand(band);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.name}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default BandInput;
