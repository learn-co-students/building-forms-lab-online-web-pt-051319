import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  handleAddBand = bandName => {this.props.dispatch({type: "ADD_BAND", band: bandName})}

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.handleAddBand} />
        {this.props.bands.map((band, i) => (<li key={i}>{band.name}</li>))}
      </div>
    )
  }
}

export default connect(state => ({...state}))(BandsContainer)
