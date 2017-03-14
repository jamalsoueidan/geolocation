import React from 'react'
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'

const HomePage = () => {
  return(
    <Main>
      <MainHeader>
        <HeaderCenter>Hjem</HeaderCenter>
      </MainHeader>
      <MainBody>
        <div className="page">Vælge en by fra listen</div>
      </MainBody>
    </Main>
  )
}

export default HomePage
