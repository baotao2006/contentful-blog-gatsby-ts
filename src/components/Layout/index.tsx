import React from 'react'

// types
import type { ReactNode } from 'react';
import type { WindowLocation } from '@reach/router';

import './variables.css'
import './global.css'
import Seo from '../Seo'
import Navigation from '../Navigation'
import Footer from '../Footer'

// props
type LayoutProps = {
  children: ReactNode;
  location: WindowLocation;
};

const Template = ({ children, location  }: LayoutProps) => {
  return (
    <>
      <Seo title='Gatsby Contentful Blog w/ TypeScript' />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Template
