const createTableDDD = `create table telzir.DDDs (
    id INT UNSIGNED AUTO_INCREMENT,
    origin INT(3) UNSIGNED,
    destiny INT(3) UNSIGNED,
    valueMinute DECIMAL(10,2),
    PRIMARY KEY (id)
);`

module.exports = { createTableDDD }