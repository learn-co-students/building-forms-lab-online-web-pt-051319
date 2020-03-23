import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  returnBands = () => {
    return this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>);
  };
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.returnBands()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const addBand = formData => {
  return { type: "ADD_BAND", band: formData };
};

export default connect(mapStateToProps, { addBand })(BandsContainer);
