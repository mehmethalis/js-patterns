import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import useListings from '../hooks/useListings';

export default function Listings() {
  const listings = useListings();

  if (!listings) return null;

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
