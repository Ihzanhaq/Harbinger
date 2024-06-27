import React, { useState, useEffect } from 'react';
import MenuCards from '../components/MenuCards';
import Appfooter from '../components/footer';
import '../Styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuNav from '../components/MenuNav';
import { CSSTransition } from 'react-transition-group';
import '../Styles/Menu.css'

function Menu({ navbar }) {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true); // Trigger the animation when the component is mounted
  }, []);

  return (
    <div className='back'>
      <div>
        <MenuNav navbar={navbar} />
        <div>
          <CSSTransition in={inProp} timeout={500} classNames="menu-cards">
            <MenuCards />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

export default Menu;

