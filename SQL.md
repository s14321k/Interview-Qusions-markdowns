<!-- TOC -->
* [SQL Ques](#sql-ques)
  * [ALL Queries](#all-queries)
  * [1. Find max and second max salary for a employee table MySQL](#1-find-max-and-second-max-salary-for-a-employee-table-mysql)
  * [Highest Salary in each department](#highest-salary-in-each-department)
  * [2. Types of Relationship in DBMS](#2-types-of-relationship-in-dbms)
  * [3. View in sql](#3-view-in-sql)
  * [(4. Predicate in SQL)[https://www3.navicat.com/en/company/aboutus/blog/1895-predicates-in-sql#]](#4-predicate-in-sqlhttpswww3navicatcomencompanyaboutusblog1895-predicates-in-sql)
  * [5. SQL FOREIGN KEY Constraint](#5-sql-foreign-key-constraint)
  * [6. Joins in SQL](#6-joins-in-sql)
  * [7. KeyWords](#7-keywords)
  * [8. Sql functions](#8-sql-functions)
<!-- TOC -->


# SQL Ques

## [ALL Queries](https://www.educba.com/mysql-query-commands/)

## 1. [Find max and second max salary for a employee table MySQL](https://stackoverflow.com/a/21520159/11962586)
- Try this, n would be the nth item you would want to return
- ```SELECT DISTINCT(Salary) FROM table ORDER BY Salary DESC LIMIT n,1```

In your case
- ```SELECT DISTINCT(column_name) FROM table_name ORDER BY column_name DESC limit 2,1;```

## [Highest Salary in each department](https://stackoverflow.com/a/8477093/11962586)
- SELECT DeptID, MAX(Salary) FROM EmpDetails GROUP BY DeptID
- SELECT DeptID, EmpName, Salary FROM EmpDetails WHERE (DeptID,Salary) IN (SELECT DeptID, MAX(Salary) FROM EmpDetails GROUP BY DeptID)

## 2. Types of Relationship in DBMS
- One to One relationship
- ![img_2.png](images/img_2.png)
- One to many or many to one relationship
- ![img_3.png](images/img_3.png)
- ![img_4.png](images/img_4.png)
- Many to many relationships
- ![img_5.png](images/img_5.png)
- https://www.javatpoint.com/types-of-relationship-in-database-table

## 3. View in sql
- In SQL, a view is a virtual table based on the result-set of an SQL statement.
- A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.
- You can add SQL statements and functions to a view and present the data as if the data were coming from one single table.
- A view is created with the CREATE VIEW statement.

```
CREATE VIEW Syntax
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## (4. Predicate in SQL)[https://www3.navicat.com/en/company/aboutus/blog/1895-predicates-in-sql#]
 - A predicate is simply an expression that evaluates to TRUE, FALSE, or UNKNOWN
 - Used in the search condition of WHERE and HAVING clauses, the join conditions of FROM clauses, as well as any other part of a query where a boolean value is required.
  - Comparison
  - LIKE
  - BETWEEN
  - IN
  - EXISTS
  - IS NULL


## 5. SQL FOREIGN KEY Constraint

```
CREATE TABLE Orders (
OrderID int NOT NULL,
OrderNumber int NOT NULL,
PersonID int,
PRIMARY KEY (OrderID),
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
```

## 6. Joins in SQL
- (INNER) JOIN: Returns records that have matching values in both tables
- LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
- RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
- FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

**Tables** - ***Products*** and ***Catogories***

``Select productId, productName, catogoryName FROM products INNER JOIN Categories on ``

## 7. [KeyWords](https://www.w3schools.com/sql/sql_ref_keywords.asp)
- Create, Create Table, Add, All, Alter, And, Drop, Distinct, Exists etc..

## 8. [Sql functions](https://www.w3schools.com/sql/sql_ref_mysql.asp)
- Numeric Functions, String Functions, Date, etc..