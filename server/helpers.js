const axios = require('axios');
const TOKEN = require('./config.js');

// url, method, data
module.exports = {
    getProducts: (req, res) => {
        const options = {
            headers: { Authorization: TOKEN },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: '/products',
            method: 'get',
            params: {
                page: 1,
                count: 5
              }
        };
        axios.request(options)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
    getProductInfo: (req, res) => {
        const id = req.params.product_id;
        const options = {
            headers: { Authorization: TOKEN },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: `/products/${id}`,
            method: 'get',
        };
        axios.request(options)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
    getProductStyles: (req, res) => {
        const id = req.params.product_id;
        const options = {
            headers: { Authorization: TOKEN },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: `/products/${id}/styles`,
            method: 'get',
        };
        axios.request(options)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
    getRelatedProducts: (req, res) => {
        const id = req.params.product_id;
        const options = {
            headers: { Authorization: TOKEN },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: `/products/${id}/related`,
            method: 'get',
        };
        axios.request(options)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
    getReviews: (req, res) => {
        const sortType = req.body.sortType || 'newest';
        const options = {
            headers: { Authorization: TOKEN },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: '/reviews',
            method: 'get',
            params: {
                page: 1,
                count: 5,
                sort: sortType,
                product_id: req.body.product_id
              }
        };
        axios.request(options)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
    getReviewsMeta: (req, res) => {
        const options = {
            headers: { Authorization: TOKEN },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: '/reviews/meta',
            method: 'get',
            params: { product_id: req.body.product_id }
        };
        axios.request(options)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
    createReview: (req, res) => {
        const options = {
            headers: { 
                Authorization: TOKEN,
            },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: '/reviews',
            method: 'post',
            data: { 
                product_id: req.body.product_id,
                rating: req.body.rating,
                summary: req.body.summary,
                body: req.body.body,
                recommend: req.body.recommend,
                name: req.body.name,
                email: req.body.email,
                photos: req.body.photos,
                characteristics: req.body.characteristics || {}
            }
        };
        axios.request(options)
            .then((response) => {
                res.status(201).send('Review Posted!');
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
    markReviewHelpful: (req, res) => {
        const id = req.params.review_id;
        const options = {
            headers: { Authorization: TOKEN },
            baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
            url: `/reviews/${id}/helpful`,
            method: 'put'
        };
        axios.request(options)
            .then((response) => {
                res.status(204).send('Marked Helpful!');
            })
            .catch((err) => {
                console.log('ERROR: ', err.response.data);
            });
    },
}