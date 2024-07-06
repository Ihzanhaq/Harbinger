import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appfooter from '../components/footer';
import FeedbackContent from '../components/FeedbackContent';
import { CSSTransition } from 'react-transition-group';
import '../Styles/Feedback.css'; // Import the CSS file for the animation

function Feedbacks({username}) {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true); // Trigger the animation when the component is mounted
  }, []);

  return (
    <div className='Dbg'>
      <CSSTransition in={inProp} timeout={500} classNames="feedback">
        <FeedbackContent username={username}/>
      </CSSTransition>
    </div>
  );
}

export default Feedbacks;
