import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/Counter';

ReactDom.render(<Counter value={50} />, document.getElementById('root'));
