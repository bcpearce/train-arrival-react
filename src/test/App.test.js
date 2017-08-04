import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import { shallow } from 'enzyme';
import 'babel-polyfill';

it('renders without crashing', () => {
  shallow(<App />);
});
