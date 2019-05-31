import React from 'react'
import {Link} from 'react-router-dom'

const SidebarDropDown = () => (
  <div>
    <ul id="dropdown" className="dropdown-content">
      <li>
        <Link to="/products">All Collections</Link>
      </li>
      <li>
        <Link to="/category/bodyBoard">Foamies</Link>
      </li>
      <li>
        <Link to="/category/shorty">Shorty</Link>
      </li>
      <li>
        <Link to="/category/long">Longie Long</Link>
      </li>
    </ul>
    <ul id="dropdown-inner" className="dropdown-content">
      <li>
        <Link to="/products">All Collections</Link>
      </li>
      <li>
        <Link to="/category/bodyBoard">Foamies</Link>
      </li>
      <li>
        <Link to="/category/shorty">Shorty</Link>
      </li>
      <li>
        <Link to="/category/long">Longie Long</Link>
      </li>
    </ul>
  </div>
)

export default SidebarDropDown
