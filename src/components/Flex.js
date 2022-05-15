import React from 'react';
import './Flex.css';

const Flex = () => {
  return (
    <>
      <section className='flex-container'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </section>
      <section className='buttons'>
        <button className='btn'>Flex</button>
        <button className='btn'>Flex-Row</button>
        <button className='btn'>Flex-Column</button>
        <button className='btn'>Justify-Center</button>
        <button className='btn'>Align-Center</button>
      </section>
    </>
  );
};

export default Flex;
