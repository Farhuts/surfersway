import React, {Component} from 'react'
import ImageCollection from './imageCollection'

class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0
    }
    this.onNextClick = this.onNextClick.bind(this)
    this.onPrevClick = this.onPrevClick.bind(this)
  }
  onNextClick() {
    if (this.state.activeIndex < 5) {
      this.setState({activeIndex: this.state.activeIndex + 1})
    } else {
      this.setState({activeIndex: 0})
    }
  }
  onPrevClick() {
    if (this.state.activeIndex > 0) {
      this.setState({activeIndex: this.state.activeIndex - 1})
    } else {
      this.setState({activeIndex: 5})
    }
  }
  render() {
    // inline style
    //  let sliderStyle ={
    //   transform:`translateX(${this.state.activeIndex * -100}%)`,
    //   transition: '0.2s'
    // }
    return (
      <div className="mainContainer">
        <button id="prevBtn" className="btn-large" onClick={this.onPrevClick}>
          PREV
        </button>
        <button
          id="nextBtn"
          className="right btn-large"
          onClick={this.onNextClick}
        >
          NEXT
        </button>
        <ol className="slide-container">
          <ImageCollection activeIndex={this.state.activeIndex} />
        </ol>
      </div>
    )
  }
}

export default MainPage
