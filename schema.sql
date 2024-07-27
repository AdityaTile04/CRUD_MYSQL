
CREATE TABLE employee (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    salary INT(11) NOT NULL
);


INSERT INTO employee 
(id, name, salary)
VALUES
(1,'Aditya', 170000),
(2,'Kunal', 150000),
(3,'Gaurav', 165000);