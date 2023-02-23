import React from 'react';

export default function useListings() {
  const [listings, setListings] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return listings;
}
