import React from 'react'
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'

require('./stylesheet.css')

const AddPage = () => {
  return(
    <Main>
      <MainHeader>
        <HeaderCenter>Tilføj din vandpibe Cafe!</HeaderCenter>
      </MainHeader>
      <MainBody>
        <div className="page">
        <h1>Hvordan kommer din cafe på vores hjemmeside?</h1>
        Her kan du tilføje din vandpibe til vores hjemmeside, så du bliver fundet via vores 30.000 besøgende om måneden! <br />
        Vi kun din oplysninger, navn, adresse, post og by.<br />

        For at blive mest set på vores hjemmeside, så skal du overveje få taget nogle professional billeder af din vandpibecafe, og evt lave en kort video.<br />
        Der udover en 360 grader video så folk kan se hele din vandpibecafe inden de besøger din cafe! <br />

        Vi kan hjælpe dig med det hele for en lille pris, så du bliver set på danmnarkskort og får besøgende fra hele danmark.<br />
        Vi kan komme til din vandpibecafe tag professional billeder, og lave en kort video en fredag aften, plus lave 360 grader video, alt for 2500kr! <br /></div>
        <div className="plans">
          <div className="plan">
            <h3>Starter</h3>
            <div className="planPrice">GRATIS</div>
            <div className="planTable">
              <div className="planFeature">Tekst</div>
              <div className="planFeature">Tekst</div>
              <div className="planFeature">Tekst</div>
              <div className="planFeature">Tekst</div>
              <div className="planFeature"><button>Køb</button></div>
            </div>
          </div>
          <div className="plan">
            <h3>Billeder</h3>
            <div className="planPrice">1000kr,-</div>
            <div className="planTable">
              <div className="planFeature">Billeder</div>
              <div className="planFeature">Ingen video</div>
              <div className="planFeature">Ingen 360 grader</div>
              <div className="planFeature">Reklamer</div>
              <div className="planFeature"><button>Køb</button></div>
            </div>
          </div>
          <div className="plan">
            <h3>Video</h3>
            <div className="planPrice">2500kr,-</div>
            <div className="planTable">
              <div className="planFeature">Billeder</div>
              <div className="planFeature">Video</div>
              <div className="planFeature">Ingen 360 grader</div>
              <div className="planFeature">Reklamer</div>
              <div className="planFeature"><button>Køb</button></div>
            </div>
          </div>
          <div className="plan best">
            <h3>Full Setup</h3>
            <div className="planPrice">5000kr,-</div>
            <div className="planTable">
              <div className="planFeature">Billeder</div>
              <div className="planFeature">Video</div>
              <div className="planFeature">360 grader</div>
              <div className="planFeature">Reklamer</div>
              <div className="planFeature"><button>Køb</button></div>
            </div>
          </div>
        </div>
      </MainBody>
    </Main>
  )
}

export default AddPage
