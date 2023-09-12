import React from 'react';
import Heading from './Heading';
import FAQCard from './FAQ/Card';
import '../styles/FAQ/index.css';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <div className='faq body'>
      <Heading heading='FAQ' />
      <div className='faq_div'>
        <FAQCard
          question='Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum sit amet?'
          answer='Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, SFVZLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.'
        />
        <FAQCard
          question='Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum sit amet?'
          answer='Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, SFVZLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.'
        />
        <FAQCard
          question='Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum sit amet?'
          answer='Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, SFVZLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.'
        />
      </div>
    </div>
  );
};

export default FAQ;
