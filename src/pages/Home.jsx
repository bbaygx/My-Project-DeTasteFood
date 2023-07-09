import React from 'react'

import { Card, Footer, Navbar, Hero, Header, Main, Stats } from '../components'


const Home = () => {
  return (
    <>
      <Header>
        <Hero/>
      </Header>
      <Main>
        <Stats/>
        <Card/>
      </Main>
    </>
  )
}

export default Home