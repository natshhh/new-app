import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return(
    <div id='contact'>
      <h2>Contact Info</h2>


      <div>
        <a target='blank' href='https://ka-ge.facebook.com/%E1%83%A1%E1%83%90%E1%83%9B%E1%83%97%E1%83%9D-%E1%83%A1%E1%83%90%E1%83%97%E1%83%AE%E1%83%98%E1%83%9A%E1%83%90%E1%83%9B%E1%83%A3%E1%83%A0%E1%83%9D-%E1%83%99%E1%83%9A%E1%83%A3%E1%83%91%E1%83%98-I-Ski-1484684781786547/'><FontAwesomeIcon icon={faFacebookSquare} className='icon' /></a>
        <a target='blank' href=''><FontAwesomeIcon icon={faEnvelope} className='icon' /></a>
      </div>

      <div>
        <h3>Address:</h3>
        <p>Kostava str. #60, Bakuriani</p>
      </div>

      <div>
        <h3>Phone:</h3>
        <p>557 42 88 66</p>
      </div>

    </div>
  )
}

export default Contact
