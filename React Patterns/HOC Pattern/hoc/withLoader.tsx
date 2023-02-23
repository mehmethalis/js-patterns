import React from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    if (!data) return <LoadingSpinner />;

    return <Element {...props} data={data} />;
  };
}
