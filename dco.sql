CREATE TABLE Doacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    quantia DECIMAL(10, 2) NOT NULL
);
