import * as React from 'react';
import './style.css';
import Listings from './components/Listings';
import Input from './components/Input';
import { ListingsProvider } from './context/ListingsProvider';

export default function App() {
  return (
    <ListingsProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3em',
        }}
      >
        <Input />
        <Listings />
      </div>
    </ListingsProvider>
  );
}
