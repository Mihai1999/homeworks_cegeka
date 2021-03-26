

INSERT INTO Brands([Name], Country)
VALUES('volswagen', 'germania'),
('mercedes', 'germania'),
('dacia', 'romania'),
('tesla', 'usa');

SELECT * FROM Brands;


INSERT INTO Models([Name])
Values('golf'),('logan'),('model s'),('GLE')

SELECT * FROM Models;

INSERT INTO Cars(BrandId, ModelId, FabricationYear, Price)
VALUES(9, 1, '2005/01/01', 2500),
(11, 2, '2007/11/05', 2000),
(12, 3, '2018/02/15', 120000),
(10, 4, '2017/05/12', 70000);

SELECT * FROM Cars;

INSERT INTO PossibleFeatures(Feature)
VALUES('computer de bord'),('aer conditionat'),
('radio'),('geamuri electrice'),('senzori parcare'),
('servodirectie');

SELECT * FROM PossibleFeatures;

INSERT INTO ActualFeatures([Name])
VALUES('Electric'),('Gas'),('Diesel'),('Benzina'),('Manuala'),('Automata');


SELECT * FROM Models;
SELECT * FROM ActualFeatures;
SELECT * FROM PossibleFeatures;


INSERT INTO [dbo].AFModels(Modelid, AFid)
VALUES(1, 3),(1, 5),
(2, 2),(2, 5),
(3, 1),
(4, 3),(4,6)
;

INSERT INTO [dbo].PFModels(Modelid, PFid)
VALUES(1, 2),
(2, 3),
(3, 5),(3,1),
(4, 4),(4,6)
;

INSERT INTO [dbo].Customers(FirstName, LastName, RegisterDate)
VALUES('Mihai', 'Draghia', '2021/01/12'),
('Ion', 'Popescu', '2021/02/02'),
('Marcel', 'Gheorghe', '2021/01/16'),
('Andrei', 'Barbu', '2021/03/21')
;

SELECT * FROM Cars;
SELECT * FROM Customers;

INSERT INTO Aquisitions(CustomerId, CarId, BuyDate)
VALUES (1, 13, '2021/01/01'),
(2, 11, '2021/2/21')

INSERT INTO Aquisitions(CustomerId, CarId, BuyDate)
VALUES (1, 12, '2021/03/01');
