import { rest } from 'msw';

export const state = () => {
  rest.get('/api/products/48432/related')
    .then(({ data }) => data)
    .then((idResponse) => {
      const relatedProductData = idResponse.map((item) => rest.get(`/api/products/${item}`)
        .then(({ data }) => data));
      Promise.all(relatedProductData)
        .then((responseProducts) => {
          const relatedStylesData = idResponse.map((item) => rest.get(`/api/products/${item}/styles`)
            .then(({ data }) => data));
          Promise.all(relatedStylesData)
            .then((responseStyles) => {
              const relatedRatingsData = idResponse.map((item) => rest.get('api/reviews/meta?product_id=48432')
                .then(({ data }) => data));
              Promise.all(relatedRatingsData)
                .then((responseRatings) => {
                  const displayData = [];
                  const stylesData = [];
                  const idxData = [];
                  let displayFormat;
                  let styleFormat;
                  let dataTracker = 0;
                  let start;

                  for (let i = 0; i < responseProducts.length; i += 1) {
                    start = (!start) ? dataTracker : dataTracker;
                    displayFormat = {
                      id: responseProducts[i].id,
                      category: responseProducts[i].category,
                      name: responseProducts[i].name,
                      styleID: responseStyles[i].results[0].style_id,
                      originalPrice: responseStyles[i].results[0].original_price,
                      salePrice: responseStyles[i].results[0].sale_price,
                      photo: responseStyles[i].results[0].photos[0].thumbnail_url,
                      url: responseStyles[i].results[0].photos[0].url,
                      ratings: responseRatings[i].ratings,
                    };

                    displayData.push(displayFormat);
                    for (let j = 0; j < responseStyles[i].results.length; j += 1) {
                      const productsIdx = responseProducts[i];
                      const stylesIdx = responseStyles[i].results;

                      styleFormat = {
                        index: dataTracker,
                        id: productsIdx.id,
                        category: productsIdx.category,
                        name: productsIdx.name,
                        description: productsIdx.description,
                        features: productsIdx.features,
                        ratings: responseRatings[i].ratings,
                        slogan: productsIdx.slogan,
                        styleID: stylesIdx[j].style_id,
                        styleName: stylesIdx[j].name,
                        originalPrice: stylesIdx[j].original_price,
                        salePrice: stylesIdx[j].sale_price,
                        photos: stylesIdx[j].photos,
                      };
                      stylesData.push(styleFormat);
                      dataTracker += 1;
                    }
                    idxData.push({
                      id: responseProducts[i].id,
                      begin: start,
                      end: dataTracker - 1,
                    });
                  }
                  return { display: displayData, styles: stylesData, idx: idxData };
                });
            });
        });
    });
};

export default state;
