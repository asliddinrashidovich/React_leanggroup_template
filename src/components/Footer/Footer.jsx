import React, { Component } from 'react'

// style
import "./Footer.scss"
import "../../styles/complate.scss"

// iamges
import imageLogo from "../../assets/images/logo.png"

// icons
import { FaFacebookF,  FaInstagram, FaLinkedinIn    } from "react-icons/fa6";


export class Footer extends Component {
  render() {
    return (
      <footer className='footer p-4' id='footer'>
        <div className="container  ">
            <div className="footer__header d-flex justify-content-between">
                <div className="footer__headerImg">
                    <img src={imageLogo} alt="" />
                </div>
                <div className="footer__headerIcons d-flex align-items-center ">
                    <a href="facebook.com"><FaFacebookF /></a>
                    <a href="instagram.com"><FaInstagram /></a>
                    <a href="linkiden.com"><FaLinkedinIn /></a>
                </div>
            </div>
            <div className='footer__lists d-flex justify-content-between'>
                <div className="footer__listBox1 d-flex justify-content-between">
                    <div className="footer__list">
                        <h2>Продукция</h2>
                        <ul>
                            <li>Ламинатные тубы</li>
                            <li>Экструзионные тубы</li>
                            <li>Другая упаковка</li>
                        </ul>
                    </div>
                    <div className="footer__list">
                        <h2>Компания</h2>
                        <ul>
                            <li>О нас</li>
                            <li>Наша команда</li>
                            <li>Сертификаты</li>
                        </ul>
                    </div>
                    <div className="footer__list">
                        <h2>Разделы</h2>
                        <ul>
                            <li>Контакты</li>
                            <li>Новости</li>
                            <li>Вакансии</li>
                        </ul>
                    </div>

                </div>
                <div className="footer__listBox2 ">
                    <div className="footer__phone1 d-flex justify-content-evenly mb-3">
                        <div className="list1__box1">
                            <h3>Беларусь</h3>
                            <ul>
                                <li>+375 (17) 270 53 77</li>
                                <li>+375 (17) 270 53 78</li>
                            </ul>
                        </div>
                        <div className="list1__box2">
                            <h3>Европа</h3>
                            <ul>
                                <li>+48 73 1111 044</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__phone2 d-flex justify-content-evenly">
                        <div className="list2__box1">
                            <h3>Москва</h3>
                            <ul>
                                <li>+7 (495) 280 73 44</li>
                                <li>+7 (495) 280 73 44</li>
                            </ul>
                        </div>
                        <div className="list2__box2">
                            <h3>Екатеринбург</h3>
                            <ul>
                                <li>+7 (343) 346 82 06</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='footer__context'>© 2022 Leangroup. All Rights Reserved.
            <br />Разработка и продвижение сайтов SkyWeb.by</p>
        </div>
      </footer>
    )
  }
}

export default Footer