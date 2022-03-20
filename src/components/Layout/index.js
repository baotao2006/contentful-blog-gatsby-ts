import React from 'react'

import './variables.css'
import './global.css'
import Seo from '../Seo'
import Navigation from '../Navigation'
import Footer from '../Footer'
const Template = ({ children, location  }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Template
