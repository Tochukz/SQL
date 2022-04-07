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
