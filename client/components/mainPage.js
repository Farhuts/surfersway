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

// <ImageSlide oneImg={oneImg} />
// <button id='sliderBtn' onClick={this.nextImg} >click</button>

// <div id='transitionDiv'>
//   <img id='one' className='slideImg' src='assets/surf.jpg' />
//   <img id='two' className='slideImg' src='assets/surf2.jpg' />
//   <button id='sliderBtn' onClick={this.fade} >click</button>
// </div>

// constructor (props) {
//   super(props)
//   this.state = {
//     oneImg: imgCollection[0]
//   }
//   this.nextImg = this.nextImg.bind(this)
// }
// componentDidMount(){
//   setInterval(this.nextImg, 5000)
// }
// nextImg (){
//   let newIndex = this.state.oneImg.index +1;
//   if(newIndex === imgCollection.length) newIndex = 0
//   this.setState({
//     oneImg: imgCollection[newIndex]
//   })
// }
// render (){
//   const {oneImg} = this.state
//   return (
//     <div>
//     <div id='transitionDiv'>
//     <ImageSlide oneImg={oneImg} />
//     <button id='sliderBtn' onClick={this.nextImg} >click</button>
//     </div>
//     <div className='container'>
//     <h3>Test will be here</h3>
//     <p></p>
//     </div>
//     </div>
//   )
// }
// <img id='three' className='slideImg' src='assets/surf3.jpg' />
// <img id='four' className='slideImg' src='assets/surf4.jpg' />

// render(){
//   return (
//     <div style={{ width: "100%", height: '70%', margin: "auto" }}>
//     <Carousel
//               // autoplay={true}
//               // autoplayInterval={3000}
//               easing="easeQuadIn"
//               >
//       <img src='assets/surf.jpg' />
//       <img src='assets/surf2copy-copy.jpeg' />
//       <img src='assets/surf3.jpg' />
//       <img src='assets/surf4.jpg' />
//       <img src='assets/waves.jpg' />
//     </Carousel>
//     </div>
//   )
// }
