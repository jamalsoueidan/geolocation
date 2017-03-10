import React from 'react'
import { Main, MainBody, MainHeader, HeaderCenter } from 'layouts/chrome'

const Home = () => {
  return(
    <Main>
      <MainHeader>
        <HeaderCenter>Hjem</HeaderCenter>
      </MainHeader>
      <MainBody>Vælge en by fra listen</MainBody>
    </Main>
  )
}

export default Home
