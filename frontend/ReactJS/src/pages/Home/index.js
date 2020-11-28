import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '../../components/GradientButton';

const SwipeArea = () => {
  const signOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      HELLO AND WELLCOME TO THE <b>TENDER</b>
      <Link to="/recipes/new">GO TO RECIPE CREATION</Link>
      <Link to="/swipe">GO TO SWIPE AREA</Link>
      <GradientButton type="button" onClick={signOut}>
        SIGN OUT
      </GradientButton>
    </div>
  );
};

export default SwipeArea;
