import React from 'react';

const Flight = ({ flight }) => (
  <div>
    <div>
      <p>{flight.price} EUR</p>
      <p>{flight.outboundPath[0].airportFrom}</p>
      <p>{flight.outboundPath[flight.outboundPath.length - 1].airportTo}</p>
    </div>

    <div>
      <p>{flight.inboundPath[0].airportFrom}</p>
      <p>{flight.inboundPath[flight.inboundPath.length - 1].airportTo}</p>
    </div>
  </div>
  ); // Ths component has no state it only displays data



export default Flight;
