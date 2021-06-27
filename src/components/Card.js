import React from 'react';

function Card ({message, user}) {
  
  return (
    <>
    <div style={{maxWidth: '300px', padding: '2rem'}}>
      <p>{message}</p>
      <div>
        <img src="https://picsum.photos/200" style={{borderRadius: '50%', maxWidth: '70px'}} alt="" />
        <h2>{user.name}</h2>
        <h3>{user.course}</h3>
      </div>
    </div>
    </>
  )
}

export default Card