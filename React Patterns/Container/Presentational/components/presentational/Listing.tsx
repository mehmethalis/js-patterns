import React from 'react';

export const Listing = ({ listing }) => (
  <div
    className="card"
    style={{
      display: 'flex',
      flexDirection: 'column',
      boxShadow:
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      width: '300px',
      height: '100%',
      margin: '1 1em',
    }}
  >
    <div style={{ position: 'relative', height: '200px', width: '100%' }}>
      <img alt={listing.title} src={listing.image} height="200px" />
    </div>
    <div style={{ padding: '0 1em' }}>
      <h3 style={{ marginBottom: '.2em' }}>{listing.name}</h3>
      <span style={{ color: 'lightslategrey', fontSize: '.8em' }}>
        {listing.city},{listing.state}
      </span>
      <h3 style={{ color: 'deeppink' }}>
        ${new Intl.NumberFormat('en-US').format(listing.price)}
      </h3>
      <span style={{ color: 'lightslategrey', fontSize: '.8em' }}>
        {listing.floors} floor, {listing.rooms} rooms, {listing.sqft}ft
      </span>
    </div>
  </div>
);
