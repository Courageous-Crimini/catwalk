import React from 'react';

const Features = ({ features }) => {
  const allFeatures = features.map((item, index) => {
    const { feature, value } = item;
    return (
      <div key={index}>
        <span>{feature}</span>
        <span>{value}</span>
      </div>
    );
  });

  return (
    <>
      {allFeatures}
    </>
  );
};

export default Features;
