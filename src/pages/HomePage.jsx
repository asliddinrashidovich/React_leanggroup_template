import React, { Component, Fragment } from 'react'

// import components
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Sertificate from '../components/Sertificate/Sertificate'
import Products from '../components/Products/Products'
import Information from '../components/Information/Information'
import Group from '../components/Group/Group'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'
import Backtop from '../components/Backtop/Backtop'

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Backtop />
        <Header />
        <About />
        <Sertificate />
        <Products />
        <Information />
        <Group />
        <News />
        <Footer />
      </Fragment>
    )
  }
}

export default HomePage