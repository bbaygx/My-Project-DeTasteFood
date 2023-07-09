import React from 'react'

import { Card,Card_2, Footer, Navbar, Hero, Header, Main, Stats } from '../components'


const Home = () => {
  return (
    <>
      <Header>
        <Hero/>
      </Header>
      <Main>
        <Stats/>
        <Card/>
        <Card_2/>
      </Main>
    </>
  )
}

export default Home