import React from 'react';

const Features = ({ features }) => {
  const allFeatures = features.map((item) => {
    const { feature, value } = item;
    return (
      <>
        <span>{feature}</span>
        <span>{value}</span>
      </>
    );
  });

  return (
    <>
      {allFeatures}
    </>
  );
};

export default Features;
