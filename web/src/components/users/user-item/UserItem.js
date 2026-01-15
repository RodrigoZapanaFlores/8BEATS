import React from 'react'


function UserItem({ name, thumbnail, city, email  }) {

 

  return (
    <div className="d-flex beat-item flex-column">
      <img className='w-100 rounded-1' src={thumbnail} alt={name} />
      <div className="d-flex mt-1 justify-content-between align-items">
        <li>
        <h3 className='m-0 fs-4 fw-lighter'>{name}</h3>
        <h3 className="m-0 fs-4 fw-dark">{city}</h3>
        <h3 className="m-0 fs-4 fw-dark">{email}</h3>  
        </li>
      </div>
    </div>
  )
}


export default UserItem