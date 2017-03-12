import React from 'react'
import PlaceItem from './place/item'

export default ({places}) => (
  <div className="cityPlaces">
    {places.map(place =>
      <PlaceItem key={place.id} place={place} />
    )}
  </div>
)
