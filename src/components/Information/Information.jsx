import React, { Component } from 'react'

// icons
import { FaUserAlt ,FaPhoneAlt  } from "react-icons/fa";


// styles
import "./Information.scss"
import "../../styles/complate.scss"


export class Information extends Component {
  render() {
    return (
      <section className='information' id='information'>
        <div className="container information__box">
            <div className="information__content p-3">
                <h1>Получить подробную <span className='sync-color'>информацию</span></h1>
                <p>Просто заполните форму, наш менеджер свяжется <br /> вами в ближайшее время</p>
            </div>

            <div className='information__form p-3'>
                <div className="information__form1 d-flex">
                    <div className="input-group mb-3 me-3">
                        <span className="input-group-text" id="basic-addon1">
                            <FaUserAlt />
                        </span>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="input-group mb-3 ">
                        <span className="input-group-text" id="basic-addon1">
                            <FaPhoneAlt />
                        </span>
                        <input type="text" className="form-control" placeholder="+375 (29) 0000000" />
                    </div>
                </div>
                <div className="information__form2 ">
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea" placeholder='Комментарий'></textarea>
                    </div>
                </div>
            </div>
            <div className="information__button ps-3 pb-4">
                <button>Получить информацию</button>
            </div>
        </div>
      </section>
    )
  }
}

export default Information