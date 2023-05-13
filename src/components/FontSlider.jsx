import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class FontSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      size: value
    })

    document.querySelector("textarea").style.fontSize = `${value}pt`;
  }

  render() {
    let { size } = this.state
    return (
      <Slider
        value={size}
        min={10}
        max={30}
        step={5}
        orientation="horizontal"
        onChange={this.handleOnChange}
      />
    )
  }
}


export default FontSlider;
