-- create dummy users
INSERT INTO
users
    (first_name, last_name, email, password)
VALUES
    ('Loretta', 'Westraw', 'lwestraw0@harvard.edu', 'bsneegr'),
    ('Bobby', 'Pawlik', 'bpawlik1@nature.com', 'UPWMrMMb1B4c'),
    ('Freddie', 'Ellins', 'fellins2@redcross.org', 'UmTVujwIDa5'),
    ('Clotilda', 'Matonin', 'cmatonin3@blinklist.com', 'nH7BpyF'),
    ('Shay', 'Furby', 'sfurby4@tuttocitta.it', 'XdpsFQMsR'),
    ('Cale', 'Trenholm', 'ctrenholm5@cpanel.net', 'icF4XddP'),
    ('Fonz', 'Smaling', 'fsmaling6@cpanel.net', 'I1eBuD'),
    ('Reggie', 'Forseith', 'rforseith7@t-online.de', 'inyXvkV9L3'),
    ('Cyndie', 'Dellenbach', 'cdellenbach8@comsenz.com', 'ltVFupFchJfd'),
    ('Wheeler', 'Wotton', 'wwotton9@smh.com.au', 'Pb6pbJv');

-- create dummy portfolios, being sure to appropriately associate
-- user_id with an actual dummy user's user_id
INSERT INTO
portfolios (name, user_id)
VALUES
    ('Consumer Non-Durables', 1),
    ('Consumer Services', 2),
    ('Foreign Currency', 3),
    ('Finance', 4),
    ('Health Care', 5),
    ('Basic Industries', 6),
    ('Public Utilities', 7),
    ('Finance', 8),
    ('Consumer Services', 9),
    ('Foreign Currency', 10),
    ('Consumer Services', 1),
    ('Finance', 2),
    ('Energy', 3),
    ('Energy', 4),
    ('Basic Industries', 5),
    ('Technology', 6),
    ('Finance', 7),
    ('Technology', 8),
    ('Health Care', 9),
    ('Technology', 10);

-- create dummy coins, being sure to appropriately associate
-- both user_id and portfolio_id with an actual portfolio's
-- portfolio_id that's associated with an actual user's user_id
INSERT INTO
coins
    (portfolio_id, user_id, name, symbol, amount, price)
VALUES
    (1, 1, 'Skalith', 'BEAT', 88, 777.77),
    (1, 1, 'Yoveo', 'MIII', 56, 334.82),
    (1, 1, 'Flipopia', 'DWLD', 24, 5396.92),
    (2, 2, 'Tazz', 'SNY', 76, 16880.19),
    (2, 2, 'Midel', 'ENFC', 61, 5479.59),
    (2, 2, 'Yata', 'RFP', 34, 14032.86),
    (3, 3, 'Jaxbean', 'AAME', 99, 5689.49),
    (3, 3, 'Yakitri', 'HAL', 66, 5125.98),
    (3, 3, 'Flipbug', 'KTOS', 76, 2881.4),
    (4, 4, 'Tanoodle', 'FIZZ', 87, 10165.34),
    (4, 4, 'Bubbletube', 'PTI', 57, 5085.56),
    (4, 4, 'Jaxbean', 'OTTW', 91, 7477.54),
    (5, 5, 'Realbuzz', 'PUMP', 38, 1205.64),
    (5, 5, 'Skajo', 'PNM', 31, 17472.55),
    (5, 5, 'Fliptune', 'CPSH', 65, 1701.6),
    (6, 6, 'Realmix', 'SINA', 53, 3456.37),
    (6, 6, 'Pixonyx', 'PLPC', 34, 7693.42),
    (6, 6, 'Camimbo', 'BGE^B', 29, 10049.19),
    (7, 7, 'Jamia', 'TAX', 47, 18266.68),
    (7, 7, 'Jaxspan', 'FNTEU', 36, 13836.55),
    (7, 7, 'Tagchat', 'JFR', 96, 3566.71),
    (8, 8, 'Blogspan', 'TDE', 83, 8043.75),
    (8, 8, 'Skalith', 'CRH', 53, 17815.45),
    (8, 8, 'Gabtype', 'ABDC', 9, 14375.25),
    (9, 9, 'Aimbu', 'PPSI', 19, 9029.33),
    (9, 9, 'Mudo', 'SGBX', 18, 7375.42),
    (9, 9, 'Demimbu', 'LPX', 14, 9902.11),
    (11, 1, 'Gabvine', 'SRT', 20, 2990.47),
    (11, 1, 'Topdrive', 'MTB^', 30, 4299.74),
    (11, 1, 'Vipe', 'FSB', 41, 8252.91),
    (12, 2, 'Dynabox', 'SHIP', 13, 17291.86),
    (12, 2, 'Edgewire', 'FCSC', 81, 17132.85),
    (12, 2, 'Devbug', 'MQT', 46, 12395.94),
    (13, 3, 'Gabvine', 'BLL', 100, 13858.39),
    (13, 3, 'Ainyx', 'NVEC', 42, 454.57),
    (13, 3, 'Skiba', 'CPE^A', 39, 13002.5),
    (14, 4, 'Quatz', 'VSEC', 20, 5711.55),
    (14, 4, 'Rhyzio', 'NEM', 6, 12875.41),
    (14, 4, 'Edgeblab', 'DECK', 33, 2699.29),
    (15, 5, 'Quaxo', 'PSA^C', 42, 2338.99),
    (15, 5, 'Gabtune', 'ONCE', 16, 18852.98),
    (15, 5, 'Yodoo', 'YERR', 74, 1411.97),
    (16, 6, 'Feedspan', 'JELD', 41, 7288.02),
    (16, 6, 'Npath', 'CHT', 70, 1626.41),
    (16, 6, 'Topicware', 'TV', 44, 18599.69),
    (17, 7, 'Mycat', 'EMKR', 25, 12820.27),
    (17, 7, 'Trupe', 'NDRO', 83, 2117.55),
    (17, 7, 'Talane', 'NTRP', 100, 9536.44),
    (18, 8, 'Agivu', 'MFA', 90, 12159.05),
    (18, 8, 'Rhynoodle', 'COUP', 10, 11832.65),
    (18, 8, 'Rhyzio', 'VLY^A', 80, 827.99),
    (19, 9, 'Devpoint', 'KMX', 3, 17971.81),
    (19, 9, 'Centizu', 'AXS', 82, 17117.73),
    (19, 9, 'Zooxo', 'APPF', 1, 17697.01),
    (20, 10, 'Mynte', 'AEO', 44, 13440.85),
    (20, 10, 'Thoughtstorm', 'BXE', 13, 19790.16),
    (20, 10, 'Realblab', 'JASNW', 59, 14230.68),
    (10, 10, 'Browsecat', 'MSFT', 49, 13418.1),
    (10, 10, 'Flashspan', 'GG', 39, 954.6),
    (10, 10, 'Centizu', 'WINA', 80, 15552.3);


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