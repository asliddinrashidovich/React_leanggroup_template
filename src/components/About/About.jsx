import React, { Component } from 'react'

import "./About.scss"
import "../../styles/complate.scss"

// images

import imageVidio from "../../assets/images/video.png"

export class About extends Component {
  render() {
    return (
      <section className='about' id='about'>
        <h1 className='text-center'>О компании <span className='sync-color'>LEANGROUP</span></h1>
        <div className='container d-flex about__box'>
            <div className="about__box1">
                <img src={imageVidio} alt="" />
            </div>
            <div className="about__box2">
                <p className='paragraph'>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб. <br /> <br />

                Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции. <br /> <br />

                С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.
                </p>
            </div>
        </div>
      </section>
    )
  }
}

export default About