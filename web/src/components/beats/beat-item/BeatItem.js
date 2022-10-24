import React from 'react'

import './BeatItem.css';

function BeatItem({ title, thumbnail, views, bpms,  }) {

  const condensedViews = views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views;

  return (
    <div className="d-flex beat-item flex-column">
      <img className='w-100 rounded-1' src={thumbnail} alt={title} />
      <div className="d-flex mt-1 justify-content-between align-items-baseline">
        <h3 className='m-0 fs-4 fw-lighter'>{title}</h3>
        <h6 className='m-0 fs-4 ' >{bpms}</h6>
        
        <span className='text-muted views text-end w-100 fw-lighter'>{condensedViews}<i className="fa fa-eye ms-1"></i></span>
      </div>
    </div>
  )
}

BeatItem.defaultProps = {
  views: 0
}

export default BeatItem