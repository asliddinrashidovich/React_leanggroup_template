import React, { Component } from 'react'
import "./Header.scss"
import "../../styles/complate.scss"

// images
import imageLogo from "../../assets/images/logo.png"


export class Header extends Component {
  render() {
    return (
        <header id='header' className='header'>
            {/* navbar */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div class="container">
                    <a class="navbar-brand" href="asliddin.uz">
                        <img src={imageLogo} alt="" />
                    </a>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">

                        </span>
                    </button> */}
                    <div class="collapse navbar-collapse header__navbarItems" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#header">Продукция</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">Сертификаты</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#group">Наша команда</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#sertificate">О нас</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#news">Новости</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#information">Вакансии</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__languagesBTN">
                        <button className=' d-inline header__languageActive'>RU</button>/
                        <button className=' d-inline '>EN</button>
                    </div>
                </div>
            </nav>

            <div className=' d-flex align-items-center header__content'>
                <div className='container'>
                    <p className='header__contentTop'>LEANGROUP - тубы и этикетки</p>
                    <h1>Ламинатные тубы</h1>
                    <p className='header__contentParag'>Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do-it-Yourself).</p>
                    <button className='btn btn-warning'>Каталог</button>
                </div>
            </div>
        </header>
    )
  }
}

export default Header