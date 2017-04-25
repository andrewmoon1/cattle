/* global  it, document */

import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import App from './App';
// import Code from './components/Code';

it('renders without crashing', () => {
  // jest.mock('./components/Code', () => { return mockComponent('Code') })
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
