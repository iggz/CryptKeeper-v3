const db = require('./conn');

class Coin {
    constructor(coin_id, portfolio_id, user_id, name, symbol, amount, price) {
        this.coin_id = coin_id;
        this.portfolio_id = portfolio_id;
        this.user_id = user_id;
        this.name = name;
        this.symbol = symbol;
        this.amount = amount;
        this.price = price;
    }

    async saveCoin() {
        const max_coin_id = await Coin.getMaxCoinId();
        const query = `
            INSERT INTO coins
                (
                    coin_id,
                    portfolio_id,
                    user_id,
                    name,
                    symbol,
                    amount,
                    price
                ) VALUES (
                    ${max_coin_id + 1},
                    ${this.portfolio_id},
                    ${this.user_id},
                    '${this.name}',
                    '${this.symbol}',
                    ${this.amount},
                    ${this.price}
                )
        `
        try {
            await db.none(query);
            console.log(`Coin ${this.name} was created successfully.`);
        } catch (error) {
            console.log("saveCoin() error:", error.message);
            return error.message;
        }
    }

    static async getCoinsByPortfolioId(portfolio_id) {
        const query = `
            SELECT
                name, symbol, amount, price
            FROM
                coins
            WHERE
                portfolio_id = ${portfolio_id}
        `;
        try {
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log("getCoinsByPortfolioId() error:", error.message);
            return error.message;
        }
    }

    static async getMaxCoinId() {
        const query = `SELECT max(coin_id) FROM coins`;
        try {
            const response = await db.one(query);
            return response.max;
        } catch (error) {
            console.log("getMaxCoinId() error:", error.message);
            return error.message;
        }
    }
}

module.exports = Coin;