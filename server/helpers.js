const axios = require('axios');
const TOKEN = require('./config.js');

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/

// API Helper functions will go here

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
                console.log('ERROR: ', err);
            });
    },
    apiHelperFunc2: ()=>{},
}