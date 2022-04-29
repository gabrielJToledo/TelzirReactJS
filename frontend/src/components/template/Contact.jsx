import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="contact">
      <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon><span>+xx xxxx-xxxx</span>
      <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon><span>contato@contato.com.br</span>
    </div>
  )
}

export default Contact