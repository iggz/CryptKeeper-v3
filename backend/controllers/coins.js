const Coin = require('../models/coin');
const Portfolio = require('../models/portfolio');

exports.addCoinToPortfolio = async (req, res) => {
    let { coinName, coinAmount, coinPrice, portfolioName } = req.body;
    const user_id = parseInt(req.params.userId);
    coinAmount = parseFloat(coinAmount);
    coinPrice = parseFloat(coinPrice);

    const portfolio_id = await Portfolio.getPortfolioIdByNameAndUserId(portfolioName, user_id);

    // currently doesn't have symbol, which is second null
    const coinInstance = new Coin(
        null, portfolio_id,
        user_id, coinName,
        null, coinAmount,
        coinPrice);

    try {
        await coinInstance.saveCoin();
        res.sendStatus(200);
    } catch (error) {
        console.log("addCoinToPortfolio error:", error.message);
        return error.message;
    }
}