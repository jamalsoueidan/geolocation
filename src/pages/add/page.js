import React from 'react'
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'

const AddPage = () => {
  return(
    <Main>
      <MainHeader>
        <HeaderCenter>Tilføj din vandpibe Cafe!</HeaderCenter>
      </MainHeader>
      <MainBody>
        <div className="page">Her kan du tilføje din vandpibe til vores hjemmeside, så du bliver fundet via vores 30.000 besøgende om måneden! <br />
        Vi kun din oplysninger, navn, adresse, post og by.<br />

        For at blive mest set på vores hjemmeside, så skal du overveje få taget nogle professional billeder af din vandpibecafe, og evt lave en kort video.<br />
        Der udover en 360 grader video så folk kan se hele din vandpibecafe inden de besøger din cafe! <br />

        Vi kan hjælpe dig med det hele for en lille pris, så du bliver set på danmnarkskort og får besøgende fra hele danmark.<br />
        Vi kan komme til din vandpibecafe tag professional billeder, og lave en kort video en fredag aften, plus lave 360 grader video, alt for 2500kr! <br /></div>
      </MainBody>
    </Main>
  )
}

export default AddPage
