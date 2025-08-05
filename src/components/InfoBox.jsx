import React from 'react';

const InfoBox = ({ children }) => {
  return (
    <div className="info-box">
      <div className="info-icon">
        <span>i</span>
      </div>
      <div className="info-content">{children}</div>
    </div>
  );
};

export default InfoBox;
