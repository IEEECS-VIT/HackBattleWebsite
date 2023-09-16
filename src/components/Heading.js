import React from 'react';
import '../styles/Heading/heading.css';

export default function Heading({ heading }) {
  return (
    <div className='heading_outer'>
      <div className='heading_inner'>
        <div className='heading'>{heading}</div>
      </div>
    </div>
  );
}
