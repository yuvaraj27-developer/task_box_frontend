import React from 'react';
import TitleLogoSVG from '../../SVG/TitleLogoSVG';
import '../../styles/LandingScreen.scss';
import Button from '../reusable/Button';

const LandingScreenContainer: React.FC = () => {

  const onClickCreateTask = () => {
    // Introduce the routing and add logic here
  };

  return (
    <div className='landing-screen-container'>
      <div className='title-container'>
        <div>
          <TitleLogoSVG className='title-logo'/>
        </div>
        <div>
          <h1>Task Box</h1>
          <p>Unbox your Productivity</p>
        </div>
      </div>
      
      <Button onClick={onClickCreateTask} title={'Create task'} />
    </div>
  );
};

export default LandingScreenContainer;
