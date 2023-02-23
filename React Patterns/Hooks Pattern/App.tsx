import * as React from 'react';
import './style.css';
import Listings from './components/Listings';
import Input from './components/Input';

export default function App() {
  return (
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
  );
}
