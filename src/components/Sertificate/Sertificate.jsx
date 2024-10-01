import React, { Component } from 'react'

// styles
import "./Sertificate.scss"
import "../../styles/complate.scss"

// icons
import { GrNext, GrPrevious  } from "react-icons/gr";

// images
import imageSer1 from "../../assets/images/sertificate1.png"
import imageSer2 from "../../assets/images/sertificate2.png"
import imageSer3 from "../../assets/images/sertificate3.png"
import imageSer4 from "../../assets/images/sertificate4.png"
import imageSer5 from "../../assets/images/sertificate5.png"

export class Sertificate extends Component {
  render() {
    return (
      <section className='sertificate' id='sertificate'>
        <h1 className='text-center'>Качество продукции подтверждают <span className='sync-color'>сертификаты</span></h1>
        <div className="container d-flex justify-content-between align-items-center sertificate__images">
          <button className='btn btn-prev'>
            <GrPrevious />
          </button>
          <img src={imageSer1} alt="" />
          <img src={imageSer2} alt="" />
          <img src={imageSer3} alt="" />
          <img src={imageSer4} alt="" />
          <img src={imageSer5} alt="" />
          <button className='btn btn-next'>
            <GrNext />
          </button>
        </div>
        <div className="sertificate__sliders d-flex justify-content-center">
          <button className='sertificate__active'></button>
          <button></button>
          <button></button>
        </div>
      </section>
    )
  }
}

export default Sertificate