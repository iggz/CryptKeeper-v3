-- create dummy users
INSERT INTO
users
    (first_name, last_name, email, password)
VALUES
    ('igor', 'igor', 'igor@igor', '$2a$10$hQB4KWB76tBgGV0iIKjmOe.U6KwL9AtgtiNG2lTKJGktQJQXGXcUe'),
    ('jack', 'faulk', 'jack@faulk', '$2a$10$HiMpWrEFkr.jmZDXh/ZEkumRY1D53aVH92vkm3xlJ5HPegw/9HZIm');

-- create dummy portfolios, being sure to appropriately associate
-- user_id with an actual dummy user's user_id
INSERT INTO
portfolios
    (name, user_id)
VALUES
    ('Altfolio 1', 1),
    ('Altfolio 2', 1),
    ('Altfolio 3', 1),
    ('Altfolio 1', 2),
    ('Altfolio 2', 2),
    ('Altfolio 3', 2);

-- create dummy coins, being sure to appropriately associate
-- both user_id and portfolio_id with an actual portfolio's
-- portfolio_id that's associated with an actual user's user_id
INSERT INTO
coins
    (portfolio_id, user_id, name, symbol, amount, price)
VALUES
    (1, 1, 'Bitcoin', 'BTC', .1, 1000),
    (1, 1, 'Ethereum', 'ETH', 1, 200),
    (1, 1, 'Litecoin', 'LTC', 1, 100),
    (2, 1, 'EOS', 'EOS', 50, 3),
    (2, 1, 'Monero', 'XMR', 3, 70),
    (2, 1, 'Dash', 'DASH', 4, 80),
    (3, 1, 'Basic Attention Coin', 'BAT', 500, .15),
    (3, 1, 'Stellar', 'XLM', 400, .05),
    (4, 2, 'Bitcoin', 'BTC', 1, 10000),
    (4, 2, 'Ethereum', 'ETH', 10, 2000),
    (4, 2, 'Litecoin', 'LTC', 10, 1000),
    (5, 2, 'EOS', 'EOS', 500, 30),
    (5, 2, 'Monero', 'XMR', 30, 700),
    (5, 2, 'Dash', 'DASH', 40, 800),
    (6, 2, 'EOS', 'EOS', 50, 3),
    (6, 2, 'Litecoin', 'LTC', 3, 50);


--------------------------------------------------------------
--                  FOLLOWING APP START                     -- 
--------------------------------------------------------------
-- Insert the following USER:
-- 		first: 	1
-- 		last: 	1
-- 		email:	1@1
-- 		pw:		1
--
-- And insert the following PORTFOLIOS -- 
-- INSERT INTO portfolios (portfolio_id, name, user_id) VALUES (21, 'red', 11), (22, 'blue', 11), (23, 'green', 11);
--
-- And insert the following COINS --
-- INSERT INTO coins (coin_id, portfolio_id, user_id, name, symbol, amount, price) VALUES (61, 21, 11, 'Bitcoin', 'BTC', 12, 124.43), (62, 21, 11, 'Ethereum', 'ETH', 145, 41.1), (63, 21, 11, 'Litecoin', 'LTC', 27, 5.12), (64, 22, 11, 'Bitcoin', 'BTC', 9, 1001.01), (65, 22, 11, 'Litecoin', 'LTC', 301, 0.33), (66, 22, 11, 'Ethereum', 'ETH', 3, 201.21), (67, 23, 11, 'Litecoin', 'LTC', 1230, 0.01), (68, 23, 11, 'Ethereum', 'ETH', 12, 401.05), (69, 23, 11, 'Bitcoin', 'BTC', 13, 5670.13);