import React from 'react'
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'

const Home = () => {
  return(
    <Main>
      <MainHeader>
        <HeaderCenter>Hjem</HeaderCenter>
        <HeaderRight>
          <Icon name="toggle" />
        </HeaderRight>
      </MainHeader>
      <MainBody>Vælge en by fra listen</MainBody>
    </Main>
  )
}

export default Home
