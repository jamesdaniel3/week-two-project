import React from 'react'

import imageUrl from "../icons/logo-cropped.png"
import '../styles/discover.css';

import Card from 'react-bootstrap/Card';

const UserCard = ( {username} ) => {
  return (
    <Card id='user-card'>
      <div className='top-container'>
        <div className="circle-container">
          <img src={imageUrl} alt="User Profile" className="profile-image" />
        </div>
      </div>
      
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body id='card-body'>
        <Card.Title id='card-title'>{username}</Card.Title>
        <Card.Text id='card-text'>
          Profile
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default UserCard