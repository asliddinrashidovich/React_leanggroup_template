import React, { Component } from 'react'
import "./Backtop.scss"
import { MdOutlineVerticalAlignTop } from "react-icons/md";


export class Backtop extends Component {
  render() {
    return (
      <div className='backtop'>
        <button>
            <a href="#header">
                <MdOutlineVerticalAlignTop />
            </a>
        </button>
      </div>
    )
  }
}

export default Backtop