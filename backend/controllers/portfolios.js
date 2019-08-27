const Portfolio = require('../models/portfolio');
const Coin = require('../models/coin');

exports.addPortfolio = async (req, res) => {
    const { name, user } = req.body;

    try {
        const response = await Portfolio.addPortfolio(name, user);
        res.json({ portfolio: response });
    } catch (error) {
        console.log("addPortfolio() controller error:", error.message);
        res.sendStatus(400);
    }
}

exports.deletePortfolio = async (req, res) => {
    const { name, user } = req.body;

    try {
        const portfolio_id = await Portfolio.deletePortfolio(name, user);
        res.json({ portfolioId: portfolio_id });
    } catch (error) {
        console.log("deletePortfolio() controller error:", error.message);
        res.sendStatus(400);
    }
}

exports.fetchPortfolioData = async (req, res) => {
    const { portfolios } = req.body;
    const portfolio_data = {};
    for (let i = 0; i < portfolios.length; i++) {
        const id = portfolios[i];
        const portfolio_name = await Portfolio.getPortfolioNameByPortfolioId(id);
        const coins = await Coin.getCoinsByPortfolioId(id);

        portfolio_data[id] = {
            name: portfolio_name,
            coins: coins
        }
    }

    res.json({ data: portfolio_data });
}