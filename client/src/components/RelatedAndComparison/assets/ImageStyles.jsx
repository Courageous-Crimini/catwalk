import React, { useContext } from 'react';
import { StateContext } from '../../App.jsx';
import { RelatedContext } from '../Context.jsx';
import Images from './Images.jsx';

const ImageStyles = () => {
  const state = useContext(StateContext);
  const { relatedIdx, relatedImages } = state;
  const { modalKey } = useContext(RelatedContext);
  const length = relatedDisplay.length - 1;

  let start;
  let finish;
  for (let i = 0; i < relatedIdx.length; i += 1) {
    const currentRelatedIdx = relatedIdx[i];
    if (modalKey === currentRelatedIdx.id) {
      start = currentRelatedIdx.begin;
      finish = currentRelatedIdx.end + 1;
    }
  }

  console.log(relatedImages.slice(start, finish));

  const imageStyles = relatedImages.slice(start, finish).map((item) => {
    console.log(item);
    return <Images key={item.styleID} stylePhotos={item.photos} />;
  });

  return (
    <>
      {imageStyles[counter]}
    </>
  );
};

//   const state = useContext(StateContext);
//   const { relatedDisplay, relatedFeatures, relatedIdx, relatedStyles, relatedImages } = state;
//   const { modalKey } = useContext(RelatedContext);
//   let start;
//   let finish;
//   for (let i = 0; i < relatedIdx.length; i += 1) {
//     const currentRelatedIdx = relatedIdx[i];
//     if (modalKey === currentRelatedIdx.id) {
//       start = currentRelatedIdx.begin;
//       finish = currentRelatedIdx.end + 1;
//     }
//   }
//   const imageStyles = relatedImages.slice(start, finish).map((item) => {
//     console.log(item.photos);
//     return (
//       // <ImageStyles photos={item.photos} />
//       <div>
//         something
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* {imageStyles} */}
//       images
//     </>
//   );
// };

export default ImageStyles;
