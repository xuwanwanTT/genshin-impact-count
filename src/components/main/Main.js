import React from 'react';
import './main.css';
import Model3d from './module/model3d/Model3d.js';
import Count from './module/count/Count.js';

const Main = ({ data }) => {
  return (
    <>
      <Model3d name={data} />

      <Count name={data} />
    </>
  );
};

export default Main;