import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ name }) => {
  <Fragment>
    <h1>Hello, my name is { name }</h1>
  </Fragment>
}

FirstApp.propTypes = {
  name: PropTypes.string
}

export default FirstApp;
