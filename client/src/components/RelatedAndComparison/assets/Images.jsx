import React, { useContext, useState } from 'react';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import { Image } from '../styles.jsx';

const Images = ({ stylePhotos }) => {
  const [style, setStyle] = useState[0];
  // console.log('StylePhotos', stylePhotos);

  const images = stylePhotos.map((item) => {
    const photo = item.thumbnail_url;
    const { url } = item.url;
    // console.log(item);
    // console.log(count);

    return (
      <a href={url}>
        <Image src={photo} alt="SORRY NO IMAGE AVAILABLE" />
      </a>
    );
  });

  return (
    <>
      {images[0]}
    </>
  );
};

export default Images;
