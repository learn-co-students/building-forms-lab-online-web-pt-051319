import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import { addBand } from "../actions/bands";

class BandsContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <BandInput addBand={this.props.addBand} />

        {this.props.bands.map(band => {
          return <li>{band.name}</li>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ bands: state.bands });

export default connect(mapStateToProps, { addBand })(BandsContainer);
