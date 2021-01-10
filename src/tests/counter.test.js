import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/Counter';

describe('Counter Test', () => {
  test('Should render <Counter/> succefully', () => {
    const wrapper = shallow(<Counter value={50} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should to show value by default is 50', () => {
    const wrapper = shallow(<Counter value={50} />);
    const textValue = wrapper.find('h2').text();
    expect(textValue).toEqual('Value: 50');
  });
  test('should to show value in 100 when prop is > 100', () => {
    const wrapper = shallow(<Counter value={101} />);
    const textValue = wrapper.find('h2').text();
    expect(textValue).toEqual('Value: 100');
  });
  test('should to show value in 0 when prop is < 0', () => {
    const wrapper = shallow(<Counter value={-1} />);
    const textValue = wrapper.find('h2').text().trim();
    expect(textValue).toEqual('Value: 0');
  });
  test('should to increment with button increment', () => {
    const wrapper = shallow(<Counter value={0} />);
    wrapper.find('button').at(0).simulate('click');
    const textValue = wrapper.find('h2').text().trim();
    expect(textValue).toEqual('Value: 1');
  });
  test('should to decrement with button decrement', () => {
    const wrapper = shallow(<Counter value={9} />);
    wrapper.find('button').at(1).simulate('click');
    const textValue = wrapper.find('h2').text().trim();
    expect(textValue).toEqual('Value: 8');
  });
  test('should to show value in 0 when to be click in decrement', () => {
    const wrapper = shallow(<Counter value={0} />);
    wrapper.find('button').at(1).simulate('click');
    const textValue = wrapper.find('h2').text().trim();
    expect(textValue).toEqual('Value: 0');
  });
  test('should to show value in 100 when to be click in increment', () => {
    const wrapper = shallow(<Counter value={100} />);
    wrapper.find('button').at(0).simulate('click');
    const textValue = wrapper.find('h2').text().trim();
    expect(textValue).toEqual('Value: 100');
  });
  test('should set value in 0 when to be click in reset', () => {
    const wrapper = shallow(<Counter value={50} />);
    wrapper.find('button').at(2).simulate('click');
    const textValue = wrapper.find('h2').text().trim();
    expect(textValue).toEqual('Value: 0');
  });
});
