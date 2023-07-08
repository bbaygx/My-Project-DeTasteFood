import React from 'react'

import { Card, Footer, Navbar, Hero, Header,Main,Stats } from '../components'


const Home = () => {
  return (
    <>

      <Header>
        <Navbar />
        <Hero/>
      </Header>
      <Main>
        <Stats/>
      </Main>
    </>
  )
}

export default Home