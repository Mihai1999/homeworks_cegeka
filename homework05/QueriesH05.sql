
--A)

SELECT  COUNT(*), b.[Name]
FROM Cars as c JOIN Brands as b
ON(b.Id = c.BrandId)
GROUP BY  b.[Id],b.[Name]
;


--B)

SELECT m.[Name], af.[Name]
FROM Cars as c JOIN Models as m
ON(c.ModelId = m.Id)
JOIN AFModels as afm ON (afm.Modelid = m.Id)
JOIN ActualFeatures as af ON (af.Id = afm.AFid)
WHERE m.Id = 4
ORDER BY af.[Name] ASC;

--C)

SELECT m.[Name], pf.[feature]
FROM Cars as c JOIN Models as m
ON(c.ModelId = m.Id)
JOIN PFModels as pfm ON (pfm.Modelid = m.Id)
JOIN PossibleFeatures as pf ON (pf.Id = pfm.PFid)
WHERE m.Id = 4
ORDER BY pf.[feature] ASC;

--D)

SELECT *
FROM Customers as c
JOIN Aquisitions as a ON(c.Id = a.CustomerId)
JOIN Cars on (cars.Id = a.CarId)
WHERE MONTH(GETDATE() - a.BuyDate) < 2 


--E)

(SELECT *
FROM Customers as c
LEFT JOIN Aquisitions as a ON(c.Id = a.CustomerId))
EXCEPT(
SELECT *
FROM Customers as c
JOIN Aquisitions as a ON(c.Id = a.CustomerId)
)

--F)

SELECT *
FROM Cars as c
JOIN Brands as b ON(b.Id = c.BrandId)
JOIN Models as m ON(m.Id = c.ModelId)
WHERE YEAR(FabricationYear) = 2018;

--G)

SELECT *
FROM Cars as c
JOIN Brands as b ON(b.Id = c.BrandId)
JOIN Models as m ON(m.Id = c.ModelId)
WHERE c.price BETWEEN 1000 AND 3000;

--H)

SELECT c.Id, c.FabricationYear, c.Price, b.[Name], m.[Name]
FROM Cars as c
JOIN Brands as b ON(b.Id = c.BrandId)
JOIN Models as m ON(m.Id = c.ModelId)
JOIN AFModels as afm ON(afm.Modelid = m.Id)
JOIN ActualFeatures as af ON(af.Id = afm.AFid)
WHERE LOWER(af.[Name]) = 'gas';
