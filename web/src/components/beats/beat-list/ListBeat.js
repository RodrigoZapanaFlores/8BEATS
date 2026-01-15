import React, { useState, useEffect } from 'react';
import * as Services from '../../../services/beatService';
import BeatItem from '../beat-item/BeatItem';

function ListBeat() {
  const [beats, setBeats] = useState([]);
  
  useEffect(() => {
    Services.getBeats()
      .then(beats => setBeats(beats))
      .catch(error => console.error(error));
  }, [])

  return (
    <div className="row row-cols-12 row-cols-sm-6 row-cols-md-3">
      {beats.map((beat) => (
        <div className="col" key={beat.id}>
          <BeatItem {...beat} />
        </div>
      ))}
    </div>
  )
}

export default ListBeat