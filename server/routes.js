const express = require('express');
const router = express.Router();
const helpers = require('./helpers.js');
const TOKEN = require('./config.js');

////////////////////////////////////////////
///////////     PRODUCTS API     ///////////
////////////////////////////////////////////

// General GET request for the products API, default params are 1 page and 5 results per page
router.get('/products', (req, res) => { helpers.getProducts(req, res) });

// GET request that returns all product level information for a specified product id.
router.get('/products/:product_id', (req, res) => { helpers.getProductInfo(req, res) });

// GET request that returns all the styles available for the given product.
router.get('/products/:product_id/styles', (req, res) => { helpers.getProductStyles(req, res) });

// GET request that returns the id's of products related to the product specified.
router.get('/products/:product_id/related', ()=>{});


////////////////////////////////////////////
///////////     REVIEWS API     ////////////
//////////////////////////////////////////// 

// General GET request for the reviews API, default params are 1 page and 5 results per page;
// sort & product_id are also required; sort can equal "newest", "helpful", or "relevant"
router.get('/reviews/', ()=>{});

// GET request that returns reviews metadata for a given product; product_id required query param
router.get('/reviews/meta', ()=>{});

// POST request that creates a new review; req.body should include: product_id, rating, summary, body,
// recommend, name, email, photos, characteristics
router.post('/reviews/', ()=>{});

// PUT request that marks a review as helpful
router.put('/reviews/:review_id/helpful', ()=>{});

// PUT request that updates a review to show it was reported. Note: this action does not delete the 
// review, but the review will not be returned in the above GET request.
router.put('/reviews/:review_id/report', ()=>{});


////////////////////////////////////////////
/////////////     Q&A API     //////////////
//////////////////////////////////////////// 

// GET request that retrieves a list of questions for a particular product. This list does not include 
// any reported questions. product_id required; other params: page count (default 1) & count per page (default 5)
router.get('/qa/questions', ()=>{});

// GET request that returns answers for a given question. This list does not include any reported answers.
router.get('/qa/questions/:question_id/answers', ()=>{});

// POST request that adds a question for a given product; req.body should include: body, name, email, product_id
router.post('/qa/questions', ()=>{});

// POST request that adds an answer for the given question; param = question_id, req.body should include: body,
// name, email, photos.
router.post('/qa/questions/:question_id/answers', ()=>{});

// PUT request that updates a question to show it was found helpful.
router.put('/qa/questions/:question_id/helpful', ()=>{});

// PUT request that updates a question to show it was reported. Note, this action does not delete the question, 
// but the question will not be returned in the above GET request.
router.put('/qa/questions/:question_id/report', ()=>{});

// PUT request that updates an answer to show it was found helpful.
router.put('/qa/answers/:answer_id/helpful', ()=>{});

// PUT request that updates an answer to show it has been reported. Note, this action does not delete the answer, 
// but the answer will not be returned in the above GET request.
router.put('/qa/answers/:answer_id/report', ()=>{});


////////////////////////////////////////////
/////////////    CART API     //////////////
//////////////////////////////////////////// 

// General GET request that retrieves list of products added to the cart by a user.
router.get('/cart', ()=>{});

// POST request that adds a product to the cart; sku_id is required in req.body
router.post('/cart', ()=>{});


////////////////////////////////////////////
/////////    INTERACTIONS API     //////////
//////////////////////////////////////////// 

// POST request that adds an interaction to the database. req.body includes: element, widget, time
router.post('/interactions', ()=>{});


module.exports = router;