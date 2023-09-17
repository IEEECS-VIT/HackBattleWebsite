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
          question='Who can participate for hackbattle?'
          answer='Students from diverse academic backgrounds, spanning various branches, courses, and degree programs, are all eligible to apply.'
        />
        <FAQCard
          question='How many people should be there in one team?'
          answer="The team's composition should range from a minimum of three members to a maximum of six."
        />
        <FAQCard
          question="If I don't have a team can I participate as an individual?"
          answer='While we recommend teams of at least three members, individuals can join our Discord server to find collaboration opportunities and form teams within our community.'
        />
        <FAQCard
          question='What are the available tracks for the hackathon?'
          answer=' We offer a variety of tracks or categories to cater to different interests and skills. Participants can choose from options such as AI/ML, IoT, Web Development, and more.'
        />
        <FAQCard
          question='How much is the total prize pool for the hackathon?'
          answer='The total prize pool for the hackathon is impressive, with prizes exceeding 1 lakh INR for winning teams. Exact prize details will be announced closer to the event date.'
        />
        <FAQCard
          question='What should I bring to the hackathon?'
          answer='Essential items such as laptops, chargers, ID-cards should be carried.'
        />
        <FAQCard
          question='Can I work on a pre-existing project?'
          answer='Submission of a new project created based on the provided problem statements is expected. Submissions of pre existing projects would lead to disqualification of the participants from the hackathon.'
        />
        <FAQCard
          question='How can I contact the organizers during the hackathon?'
          answer='Volunteers shall be available throughout the hackathon in the venue itself for any help required. Participants can also reach out on the discord channel.'
        />
      </div>
    </div>
  );
};

export default FAQ;
