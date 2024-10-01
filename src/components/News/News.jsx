import React, { Component } from 'react'

// style
import "./News.scss"
import "../../styles/complate.scss"

// images
import imageNews1 from "../../assets/images/news1.png"
import imageNews2 from "../../assets/images/news2.png"
import imageNews3 from "../../assets/images/news3.png"

export class News extends Component {
  render() {
    return (
      <section className='news' id='news'>
        <div className="container">
            <h1 className='text-center'>Новости</h1>
            <div className="news__contents d-flex justify-content-between">
                <div className="news__contentBox">
                    <div className="news__img">
                        <img src={imageNews1} alt="" />
                    </div>
                    <p className='news__contentDate'>28.01.2022</p>
                    <p className='news__contentText'>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </div>
                <div className="news__contentBox">
                    <div className="news__img">
                        <img src={imageNews2} alt="" />
                    </div>
                    <p className='news__contentDate'>21.01.2022</p>
                    <p className='news__contentText'>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </div>
                <div className="news__contentBox">
                    <div className="news__img">
                        <img src={imageNews3} alt="" />
                    </div>
                    <p className='news__contentDate'> 16.12.2021</p>
                    <p className='news__contentText'>Туба, как вид упаковки</p>
                </div>
            </div>
            <button className='news__btn d-flex'>Все новости</button>
        </div>
      </section>
    )
  }
}

export default News
