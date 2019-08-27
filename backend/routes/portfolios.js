const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolios');
const coinController = require('../controllers/coins');

// GET route for testing purposes
router.get('/:userId/add/', (req, res) => {
    console.log('GET req -> /portfolios/:userdId/add');
    res.redirect('/');
});

// POST route for frontend <-> backend portfolio insertion
router.post('/:userId/add/', portfolioController.addPortfolio);

// POST route for frontend <-> backend portfolio deletion
router.post('/:userId/delete', portfolioController.deletePortfolio);

// POST route for receiving a new coin
router.post('/:userId/coinAdd', coinController.addCoinToPortfolio);

// POST route for getting all portfolio data
router.post('/:userId/get', portfolioController.fetchPortfolioData);

module.exports = router;