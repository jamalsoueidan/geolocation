import React from 'react'
import PlaceItem from './place/item'

export default ({city}) => (
  <div className="cityPlaces">
    {city.places.map(place =>
      <PlaceItem key={place.id} place={place} />
    )}
  </div>
)
