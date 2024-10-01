import React, { Component } from 'react'

// styles
import "./Products.scss"
import "../../styles/complate.scss"

// images
import imageProduct1 from "../../assets/images/product1.png"
import imageProduct2 from "../../assets/images/product2.png"
import imageProduct3 from "../../assets/images/product3.png"
import imageProduct4 from "../../assets/images/product4.png"
import imageProduct5 from "../../assets/images/product5.png"

export class Products extends Component {
  render() {
    return (
      <section className='products' id='products'>
        <div className="container products__box">
            <h1 className='text-center'>Наша <span className='sync-color'>продукция</span></h1>
            <div className="products__buttons d-flex justify-content-center">
                <button className='btn'>Ламинатные тубы</button>
                <button className='btn products__active'>Экструзионные тубы</button>
                <button className='btn'>Другая упаковка</button>
            </div>
            <div className="products__images d-flex justify-content-between">
                <img src={imageProduct1} alt="" />
                <img src={imageProduct2} alt="" />
                <img src={imageProduct3} alt="" />
                <img src={imageProduct4} alt="" />
                <img src={imageProduct5} alt="" />
            </div>
            <button className='products__mainbutton d-flex justify-content-center'>Перейти в каталог</button>
        </div>
      </section>
    )
  }
}

export default Products