import React from 'react';
import { render } from 'react-dom';
import { NakupniSeznam } from './components/NakupniSeznam';
import './style.css';

const App = () => {
  return (
    <div>
      <NakupniSeznam />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
