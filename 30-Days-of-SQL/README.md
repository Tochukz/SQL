# SQL Basic to Advanced Level
[30 Days of SQL – From Basic to Advanced Level](https://www.geeksforgeeks.org/30-days-of-sql-from-basic-to-advanced-level/)  

## Basic Concept
__CREATE__  
```
CREATE DATABASE school;
```
```
USE school;
CREATE TABLE students(
  student_id INT(4) AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(20),
  lastname VARCHAR(20),
  class INT(3),
  PRIMARY KEY(student_id)
);

```

__INSERT INTO Statement__  
```
INSERT INTO students VALUES(1, 'John', 'Cox', 5);
INSERT INTO students(firstname, lastname, class) VALUES('Kelvin', 'Smith', 6);
INSERT INTO school2.students(firstname, lastname) VALUES('James', 'Cordon'), ('Peter', 'Pan'), ('Kelvin', 'Smith');
```

__SELECT in INSERT (Copying)__
```
INSERT INTO school2.students SELECT * FROM school.students;
INSERT INTO school2.students(firstname, lastname) SELECT firstname, lastname FROM clinic.patients WHERE clinic.patients.patientId < 5;
```

__SELECT Query__  
```
SELECT * FROM clinic.patients;
SELECT firstname, lastname  FROM clinic.patients limit 10;
SELECT firstname, lastname as Surname, phone as CellPhone FROM clinic.patients;
```

__WHERE Clause__  
```
SELECT * FROM lab.tests WHERE default_price = 1500;
SELECT * FROM lab.tests WHERE school_price > 2000;
SELECT * FROM lab.tests WHERE hospital_price <= 1000;
SELECT * FROM lab.tests WHERE rebate <> 1000;
SELECT * FROM lab.tests WHERE default_price BETWEEN 500 AND 1000;
SELECT * FROM lab.tests WHERE portal_price IN (500, 700, 1500);
SELECT * FROM lab.tests WHERE test_name LIKE "Consultation%";
```

__Having Clause__   
The _HAVING_ clause is similar to _WHERE_ clause but it is used in aggregated data.  
The _WHERE_ clause cannot be used with aggregates.
```
SELECT patient_id, SUM(amount_paid) AS total FROM lab.investigations GROUP BY patient_id HAVING total > 100000;  
SELECT referrer_id, SUM(rebate) AS Total, AVG(paid) AS AvgPaid FROM lab.rebates GROUP BY referrer_id HAVING TOTAL > 100000;
```

__SQL AND and OR operators (conjunctive operators)__  
```
SELECT * FROM lab.patients WHERE lastname  = 'John' AND sex = 'Male';
SELECT * FROM lab.patients WHERE lastname  = 'Johnson' AND sex  = 'Female' AND email IS NOT NULL;
SELECT * FROM lab.patients WHERE date_of_birth > '2020-01-01' OR date_of_birth < '1984-01-01';
SELECT * FROM lab.tests WHERE rebate > 1000 AND (default_price > 1500 OR default_price < 3000);  
```

__SQL NOT Operator__  
```
SELECT * FROM lab.rebates WHERE NOT paid = 'Yes';
SELECT * FROM lab.investigations WHERE NOT balance = 0;
```

__DELETE Statement__  
```
DELETE FROM school.students where student_id = 2;
```

__DROP, TRUNCATE__  
```
TRUNCATE TABLE school.students;
DROP TABLE school.students;
DROP DATABASE school;
```  

## Nested Queries, Wildcard Operators, and other Clauses
__WITH clause__  
The `WITH` clause is used to define the CTE(Common Table Expressions). A common table expression is a named temporary result set that can be used multiple times.   
The `WITH` clause may not be supported by MySQL 5.x but it is supported by  MySQL 8.0 and SQL Server.  
So for this examples I will use SQL server.  
```
CREATE DATABASE lab;
USE lab;
GO;

CREATE TABLE patients (
  patient_id INT  NOT NULL IDENTITY(1,1) PRIMARY KEY,
  firstname VARCHAR(20)  NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  sex VARCHAR(7) CHECK(sex IN('Male','Female')) DEFAULT 'Male',
  date_of_birth DATE,
  phone VARCHAR(11),
  email VARCHAR(60),
);
```

```
WITH some_patients AS
 (SELECT * FROM patients WHERE email IS NOT NULL)
SELECT * FROM some_patients WHERE sex = 'Male';
```  
You can has a number of CTE separated by comma.
[More about WITH](https://www.educba.com/mysql-with/)  

__CREATE TEMPORARY TABLE__  
For MySQL 5.x which do not support the `WITH` class, you can use the temporary tables.  
A temporary table us a special type of table that allows you to store a temporary result set which you can reuse several times in a single session.   
```
CREATE TEMPORARY TABLE some_patients (
  patient_id INT(11),
  firstname VARCHAR(20),
  lastname VARCHAR(20),
  date_of_birth DATE
);
INSERT INTO some_patients SELECT patient_id, firstname, lastname, date_of_birth FROM lab.patients WHERE date_of_birth BETWEEN '1990-01-01' AND '2000-01-01';
SELECT * FROM some_patients;
```
To drop the temporary table while on the same query session:
```
DROP TEMPORARY TABLE IF EXISTS some_patients;
```  
You can create temporary table based on an existing table structure.  
```
CREATE TEMPORARY TABLE some_patients
 SELECT patient_id, firstname, lastname date_of_birth FROM patients WHERE date_of_birth BETWEEN '1990-01-01' AND '2000-01-01';
```
[More about temporary table](https://www.mysqltutorial.org/mysql-temporary-table/#:~:text=In%20MySQL%2C%20a%20temporary%20table,statement%20with%20the%20JOIN%20clauses.)


__MUTIPLE JOIN AND MANY TO MANY RELATIONSHIP__  
Here we join two tables which are having a many to many relationship.  
The two table are `referrers` and `patients` and they have a `many-to-many` relationship using the bridge table `referrers_patients`;   

Here we find the list of patients that have been referrers by each referrer.  
```
SELECT lab.referrers.referrer_id, title, lab.referrers.lastname, lab.patients.patient_id, lab.patients.firstname, lab.patients.lastname
FROM lab.referrers
INNER JOIN lab.referrers_patients ON lab.referrers.referrer_id = lab.referrers_patients.referrer_id
INNER JOIN  lab.patients ON lab.patients.patient_id = lab.referrers_patients.patient_id
ORDER BY referrer_id;
```  
The strategy is to JOIN the `referrers_patients` to `referrers` and the resulting table be JOINed to `patients`.  i.e `referrers` -> `referrers_patients` -> `patients`  

What about if we want to see all the referrers that referred each patient so far?      
```
SELECT lab.patients.patient_id, lab.patients.firstname, lab.referrers.referrer_id, lab.referrers.title, lab.referrers.lastname
FROM lab.patients
INNER JOIN lab.referrers_patients ON lab.patients.patient_id = lab.referrers_patients.patient_id
INNER JOIN lab.referrers ON lab.referrers.referrer_id = lab.referrers_patients.referrer_id
ORDER BY patient_id;
```  
Here is JOIN query is `patients` -> `referrers_patients` -> `referrers`.  
