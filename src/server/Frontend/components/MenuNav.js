import React from 'react';
import '../Styles/Menu.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function MenuNav({ navbar }) {
  const topPosition = navbar ? '87.2px' : '184px'; // Adjust as needed

  return (
    <div className='menu-div' style={{ top: topPosition }}>
      <div className='container-fluid'>
        <ul className='col-md-12 menu-nav p-4'>
          <li><AnchorLink id='navitem' href="#starters">STARTERS</AnchorLink></li>
          <li><AnchorLink id='navitem' href="#snacks">SNACKS</AnchorLink></li>
          <li><AnchorLink id='navitem' href="#pasta">PASTA</AnchorLink></li>
          <li><AnchorLink id='navitem' href="#mains">MAINS</AnchorLink></li>
          <li><AnchorLink id='navitem' href="#desserts">DESSERTS</AnchorLink></li>
          <li><AnchorLink id='navitem' href="#drinks">DRINKS</AnchorLink></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuNav;



