import React from 'react'
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'

const HomePage = () => {
  return(
    <Main>
      <MainHeader>
        <HeaderCenter>Hjem</HeaderCenter>
      </MainHeader>
      <MainBody>Vælge en by fra listen</MainBody>
    </Main>
  )
}

export default HomePage
