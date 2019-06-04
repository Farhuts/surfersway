import React from 'react'

const images = [
  <img className="responsive-img" width="1800" src="assets/surf.jpg" />,
  <img className="responsive-img" width="1800" src="assets/surf2.jpg" />,
  <img className="responsive-img" width="1800" src="assets/surf3.jpg" />,
  <img className="responsive-img" width="1800" src="assets/surf4.jpg" />,
  <img className="responsive-img" width="1800" src="assets/surf5.jpg" />,
  <img className="responsive-img" width="1800" src="assets/surf7.jpg" />
]

const ImageCollection = ({activeIndex}) => {
  return images.map((item, index) => {
    let computedClass = index === activeIndex ? 'slide active' : 'slide'
    return (
      <li className={computedClass} key={index}>
        {item}
      </li>
    )
  })
}

export default ImageCollection
