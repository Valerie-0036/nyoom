import { useRef } from 'react';
import cherry from './cherry.jpg';
import grape from './grape.jpg';
import snack from './snack.png';
import nut from './nut.jpg';
import coco from './coco.jpg';
import cashew from './cashew.jpg';
import almond from './almond.jpg';
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {faStarHalf as faStarRegularHalf} from '@fortawesome/free-regular-svg-icons';

function App() {
  const ref = useRef();
  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div>
      <Parallax pages={11} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.5}
          style={{
            backgroundImage: `url(${cherry})`,
            backgroundSize: 'cover',
          }}
        />
                <ParallaxLayer
          offset={1.5}
          speed={1}
          factor={0.5}
        >
           <h1> Made original in Bali, using natural ingredients</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={5}
          style={{
            backgroundImage: `url(${grape})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={snack} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1> Recharge ∙ Rejuve ∙ Relieve </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Check our products down below</h1>
        </ParallaxLayer>

        <ParallaxLayer
         sticky={{ start: 3.8, end: 4.5 }}
    
          speed={1}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Raisin Shine</h1>
        </ParallaxLayer>

        <ParallaxLayer
        
          offset={5}
          speed={1}
          factor={2.5}
          style={{
            backgroundImage: `url(${nut})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
         sticky={{ start: 5.3, end: 5.9 }}
          
          speed={1}

          onClick={() => ref.current.scrollTo(0)
          }
        >
          <h1>Tasty Nutty</h1>
        </ParallaxLayer>


        <ParallaxLayer
          offset={6}
          speed={1}
          factor={2.5}
          style={{
            backgroundImage: `url(${cashew})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
         
          sticky={{ start: 6.3, end: 6.8 }}
          speed={1}
          factor={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Crunchy Cashew</h1>
        </ParallaxLayer>

        <ParallaxLayer
         
          sticky={{ start: 6.3, end: 6.3 }}
          speed={0.5}
          onClick={() => ref.current.scrollTo(0)}
          style={{...alignCenter, justifyContent: 'flex-start'}}
        >
          <div id="cashew-left" className="card" >
          <div>
           <h3>Why is Crunchy Cashew so good?</h3>
           <hr />
            <ul>
              <li>Stabilise your blood sugar</li>
              <li>Fire your metabolism</li>
              <li>Get better sleep</li>
            </ul>

          </div>
          
          </div>
        </ParallaxLayer>
        <ParallaxLayer
         
          offset={6.5}
          speed={2}
          factor={0.5}
          onClick={() => ref.current.scrollTo(0)}
          style={{...alignCenter, justifyContent: 'flex-end'}}
        >
          <div className='reviews'>
          <div className="cashew-right card">
          <div className="flex">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarRegular} />
          </div>
          <div>
            its good -anon
          </div>
          </div>

          <div className="cashew-right card">
         <div className="flex">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarRegularHalf} />
          </div>
          <div>
            noice -user23823573758
          </div>
         </div>

         <div className="cashew-right card">
         <div className="flex">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarRegularHalf} />
          </div>
          <div>
            noice -user23823573758
          </div>
         </div>

         <div className="cashew-right card">
         <div className="flex">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarRegularHalf} />
          </div>
          <div>
            noice -user23823573758
          </div>
         </div>

         <div className="cashew-right card">
         <div className="flex">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarRegularHalf} />
          </div>
          <div>
            noice -user23823573758
          </div>
         </div>

          </div>
        
        </ParallaxLayer>
       

        <ParallaxLayer
          offset={7}
          speed={1.6}
          factor={3}
          style={{
            backgroundImage: `url(${coco})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={7.5}
          speed={0.5}
          factor={3}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Coco Delight</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={8}
          speed={1.5}
          factor={2}
          style={{
            backgroundImage: `url(${almond})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={8.5}
          speed={1}
          factor={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Almond Power</h1>
          <div>

          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;