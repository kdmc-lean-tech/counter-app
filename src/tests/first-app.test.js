import React from 'react';
import { shallow } from 'enzyme';
import FirstApp from '../components/FirstApp';

describe('FirstApp Test', () => {
  test('should to show <FirstApp / > success', () => {
    const name = 'Kevin';
    const wrapper = shallow(<FirstApp name={name}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
