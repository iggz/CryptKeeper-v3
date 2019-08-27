const User = require('../models/users');
const Portfolio = require('../models/portfolio');
const bcrypt = require('bcryptjs');

exports.signup_post = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);

    const userInstance = new User(null, firstName, lastName, email, hash);

    try {
        await userInstance.save();
        res.sendStatus(200);
    } catch (error) {
        console.log("signup_post error:", error.message);
        return error.message;
    }
}

exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    const userInstance = new User(null, null, null, email, password);
    const userData = await userInstance.getUserByEmail();

    const isValid = await bcrypt.compareSync(password, userData.password);

    if (!!isValid) {
        userInstance.setUserId(userData.user_id);

        let portfolios = await Portfolio.getAllPortfoliosByUserId(userData.user_id);
        portfolios = portfolios.map((obj) => {
            return obj.portfolio_id;
        });

        res.json({ portfolios: portfolios, user: userInstance.user_id });
    } else {
        res.sendStatus(401);
    }
};

exports.delete_user_post = async (req, res) => {
    const { email, password } = req.body;

    const userInstance = new User(null, null, null, email, password);
    const userData = await userInstance.getUserByEmail();
    userInstance.setUserId(userData.user_id);

    const isValid = await bcrypt.compareSync(password, userData.password);

    if (!!isValid) {
        await userInstance.deleteUserById();
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
}

exports.logout_post = async (req, res) => {
    const { email, password } = req.body;

    const userInstance = new User(null, null, null, email, password);
    const userData = await userInstance.getUserByEmail();
    userInstance.setUserId(userData.user_id);

    const isValid = await bcrypt.compareSync(password, userData.password);

    if (!!isValid) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
}