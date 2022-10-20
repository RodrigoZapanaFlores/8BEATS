import React from 'react'


function UserItem({ name, thumbnail,  }) {

 

  return (
    <div className="d-flex beat-item flex-column">
      <img className='w-100 rounded-1' src={thumbnail} alt={name} />
      <div className="d-flex mt-1 justify-content-between align-items-baseline">
        <h3 className='m-0 fs-4 fw-lighter'>{name}</h3>

      </div>
    </div>
  )
}


export default UserItem