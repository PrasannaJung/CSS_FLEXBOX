import React, { useRef } from 'react';
import './Flex.css';

const Flex = () => {
  const containerRef = useRef();

  const makeFlexHandler = () => {
    containerRef.current.classList.toggle('flex');
    console.log(containerRef.current);
  };
  const flexRowHandler = () => {
    containerRef.current.classList.toggle('flex-row');
  };
  const flexColumnHandler = () => {
    containerRef.current.classList.toggle('flex-column');
  };
  const justifyCenterHandler = () => {
    containerRef.current.classList.toggle('justify-content-center');
  };
  const justifyAroundHandler = () => {
    containerRef.current.classList.toggle('justify-content-around');
  };
  const justifyBetweenHandler = () => {
    containerRef.current.classList.toggle('justify-content-between');
  };
  const justifyEvenlyHandler = () => {
    containerRef.current.classList.toggle('justify-content-evenly');
  };

  const justifyStartHandler = () => {
    containerRef.current.classList.toggle('justify-content-start');
  };
  const justifyEndHandler = () => {
    containerRef.current.classList.toggle('justify-content-end');
  };
  const alignCenterHandler = () => {
    containerRef.current.classList.toggle('align-items-center');
  };

  const alignStretchHandler = () => {
    containerRef.current.classList.toggle('align-items-stretch');
  };
  const alignBaselineHandler = () => {
    containerRef.current.classList.toggle('align-items-baseline');
  };
  const alignStartHandler = () => {
    containerRef.current.classList.toggle('align-items-flex-start');
  };
  const alignEndHandler = () => {
    containerRef.current.classList.toggle('align-items-flex-end');
  };

  return (
    <>
      <section ref={containerRef} className='flex-container'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </section>
      <section className='buttons'>
        <button className='btn' onClick={makeFlexHandler}>
          Flex
        </button>
        <button className='btn' onClick={flexRowHandler}>
          Flex-Row
        </button>
        <button onClick={flexColumnHandler} className='btn'>
          Flex-Column
        </button>
        <button onClick={justifyCenterHandler} className='btn'>
          Justify-Center
        </button>
        {/* <button onClick={justifyAroundHandler} className='btn'>
          Justify-Around
        </button>
        <button onClick={justifyBetweenHandler} className='btn'>
          Justify-Between
        </button>
        <button onClick={justifyEvenlyHandler} className='btn'>
          Justify-Evenly
        </button>
        <button onClick={justifyStartHandler} className='btn'>
          Justify-Start
        </button>
        <button onClick={justifyEndHandler} className='btn'>
          Justify-End
        </button> */}
        <button onClick={alignCenterHandler} className='btn'>
          Align-Center
        </button>
        {/* <button onClick={alignStretchHandler} className='btn'>
          Align-Stretch
        </button>
        <button onClick={alignBaselineHandler} className='btn'>
          Align-Baseline
        </button>
        <button onClick={alignStartHandler} className='btn'>
          Align-Start
        </button>
        <button onClick={alignEndHandler} className='btn'>
          Align-End
        </button> */}
      </section>
    </>
  );
};

export default Flex;
