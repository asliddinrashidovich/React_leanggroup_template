import React, { Component } from 'react'

// style
import "./Group.scss"
import "../../styles/complate.scss"

// images
import imagesPerson1 from "../../assets/images/person1.png"
import imagesPerson2 from "../../assets/images/person2.png"
import imagesPerson3 from "../../assets/images/person3.png"
import imagesPerson4 from "../../assets/images/person4.png"
import imagesPerson5 from "../../assets/images/person5.png"

export class Group extends Component {
  render() {
    return (
        <section className='group' id='group'>
            <div className="container group__box">
                <h1 className='text-center'>Наша <span className='sync-color'>команда</span></h1>
                <div className="group__people d-flex justify-content-between">
                    <div className="group__person text-center">
                        <div className="person__img">
                            <img src={imagesPerson1} alt="" />
                        </div>
                        <h4>Войнич Дарья</h4>
                        <p className='person__level'>Заместитель директора по<br /> продажам</p>
                        <p className='person__phone'>+375 (17) 270-53-77 (317)</p>
                    </div>
                    <div className="group__person text-center">
                        <div className="person__img">
                            <img src={imagesPerson2} alt="" />
                        </div>
                        <h4>Мисько Екатерина</h4>
                        <p className='person__level'>Начальник отдела <br /> сопровождения</p>
                        <p person__phone>+375 (17) 270-53-77 (115) <br /> +375 29 112-73-48</p>
                        <p person__phone>k.melnichenko@leangroup.by</p>
                    </div>
                    <div className="group__person text-center">
                        <div className="person__img">
                            <img src={imagesPerson3} alt="" />
                        </div>
                        <h4>Дмитроченко Дмитрий</h4>
                        <p className='person__level'>Начальник отдела <br /> допечатной подготовки</p>
                        <p person__phone>+375 (17) 270-53-77 (333) <br /> +375 29 360-32-26</p>
                        <p person__phone>dmitrochenko@leangroup.by</p>
                    </div>
                    <div className="group__person text-center">
                        <div className="person__img">
                            <img src={imagesPerson4} alt="" />
                        </div>
                        <h4>Антух Евгений</h4>
                        <p className='person__level'>Начальник отдела <br /> снабжения</p>
                        <p person__phone>+375 (17) 270-53-77 (148) <br /> +375 44 764-16-28</p>
                        <p person__phone>j.antuh@leangroup.by</p>
                    </div>
                    <div className="group__person text-center">
                        <div className="person__img">
                            <img src={imagesPerson5} alt="" />
                        </div>
                        <h4>Мисник Елена</h4>
                        <p className='person__level'>Специалист по работе с <br /> клиентами</p>
                        <p person__phone>+375 (17) 270-53-77 (322) <br />  +375 29 329-34-03</p>
                        <p person__phone>e.misnik@leangroup.by</p>
                    </div>
                </div>
                <button className='group__btn text-center d-flex justify-content-center '>Все новости</button>
            </div>
        </section>
    )
  }
}

export default Group