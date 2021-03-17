import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById('root'));