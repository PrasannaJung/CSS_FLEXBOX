import React, { useRef, useState } from 'react';
import './Flex.css';

const Flex = () => {
  const containerRef = useRef();

  const [flexDirValue, setFlexDirValue] = useState('flex-row');
  const [flexJustifyValue, setFlexJustifyValue] = useState('flex-start');
  const [flexAlignValue, setFlexAlignValue] = useState('flex-start');

  return (
    <>
      <section
        ref={containerRef}
        className={`flex-container ${flexDirValue} ${flexJustifyValue} ${flexAlignValue}`}
      >
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </section>
      <section className='buttons'>
        <select
          onChange={e => {
            setFlexDirValue(e.target.value);
          }}
        >
          <option className='' value='' disabled>
            --Select Flex Direction--
          </option>
          <option className='' value='flex-row'>
            Row
          </option>
          <option className='' value='flex-column'>
            Column
          </option>
        </select>
        <select
          onChange={e => {
            setFlexJustifyValue(e.target.value);
          }}
        >
          <option className='' value='' disabled>
            --Select Justify Value--
          </option>
          <option className='' value='justify-start'>
            Justify-Start
          </option>
          <option className='' value='justify-center'>
            Justify-Center
          </option>
          <option className='' value='justify-around'>
            Justify-Around
          </option>
          <option className='' value='justify-evenly'>
            Justify-Evenly
          </option>
          <option className='' value='justify-between'>
            Justify-Between
          </option>
          <option className='' value='justify-end'>
            Justify-End
          </option>
        </select>

        {/* Text Size */}
        <select
          onChange={e => {
            setFlexAlignValue(e.target.value);
          }}
        >
          <option className='' value='' disabled>
            --Select Align Value--
          </option>
          <option className='' value='align-start'>
            Align-Start
          </option>
          <option className='' value='align-center'>
            Align-Center
          </option>
          <option className='' value='align-baseline'>
            Align-Baseline
          </option>
          <option className='' value='align-end'>
            Align End
          </option>
        </select>
      </section>
    </>
  );
};

export default Flex;
