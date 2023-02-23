import React from 'react';
import { Listings } from '../presentational/Listings';

export default function ListingsContainerComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return <Listings listings={data.listings} />;
}
