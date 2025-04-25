<!-- TOC -->

- [SQL Ques](#sql-ques)
  - [ALL Queries](#all-queries)
  - [1. Find max and second max salary for a employee table MySQL](#1-find-max-and-second-max-salary-for-a-employee-table-mysql)
  - [Highest Salary in each department](#highest-salary-in-each-department)
  - [2. Types of Relationship in DBMS](#2-types-of-relationship-in-dbms)
  - [3. View in sql](#3-view-in-sql)
  - [4. Predicate in SQL](#4-predicate-in-sql)
  - [5. SQL Constraints](#5-sql-constraints)
    - [1. **Primary Key Constraint**](#1-primary-key-constraint)
    - [2. **Foreign Key Constraint**](#2-foreign-key-constraint)
    - [3. **Unique Constraint**](#3-unique-constraint)
    - [4. **Not Null Constraint**](#4-not-null-constraint)
    - [5. **Check Constraint**](#5-check-constraint)
    - [6. **Default Constraint**](#6-default-constraint)
    - [Summary](#summary)
  - [6. Joins in SQL](#6-joins-in-sql)
  - [7. KeyWords](#7-keywords)
  - [8. Sql functions](#8-sql-functions)
  - [SQL Questions](#sql-questions)
    - [1. Indexing inSQL](#1-indexing-insql)
    - [2. primary key vs foreign key](#2-primary-key-vs-foreign-key)
      - [Primary Key](#primary-key)
      - [Foreign Key](#foreign-key)
      - [Differences](#differences)
      - [Summary](#summary-1)
    - [3. stored procedure](#3-stored-procedure)
    - [Key Features and Benefits of Stored Procedures](#key-features-and-benefits-of-stored-procedures)
      - [Creating and Using Stored Procedures](#creating-and-using-stored-procedures)
        - [Example: Creating a Stored Procedure](#example-creating-a-stored-procedure)
        - [Example: Executing a Stored Procedure](#example-executing-a-stored-procedure)
        - [Example: Creating a Stored Procedure with Output Parameters](#example-creating-a-stored-procedure-with-output-parameters)
      - [Summary](#summary-2)
    - [4. Write a query to fetch the employee whose age is greater than 40?](#4-write-a-query-to-fetch-the-employee-whose-age-is-greater-than-40)
    - [5. Describe Referential constraint?](#5-describe-referential-constraint)
    - [6. Composite and Foreign Key](#6-composite-and-foreign-key)
    - [7. Normalization](#7-normalization)
      - [Normal Forms](#normal-forms)
      - [Summary of Benefits](#summary-of-benefits)
    - [8. What are the ways to reduce the load in database.](#8-what-are-the-ways-to-reduce-the-load-in-database)
    - [9. Primary Key vs Unique Key](#9-primary-key-vs-unique-key)
      - [Primary Key](#primary-key-1)
      - [Unique Key](#unique-key)
      - [Key Differences](#key-differences)
      - [Usage Examples](#usage-examples)
      - [Summary](#summary-3)

# SQL Ques

## [ALL Queries](https://www.educba.com/mysql-query-commands/)

## 1. [Find max and second max salary for a employee table MySQL](https://stackoverflow.com/a/21520159/11962586)

- Try this, n would be the nth item you would want to return
- `SELECT DISTINCT(Salary) FROM table ORDER BY Salary DESC LIMIT n,1`

```
limit 0,1  - Top max salary

limit 1,1  - Second max salary

limit 2,1  - Third max salary

limit 3,1  - Fourth max salary

```

Max and 2nd Max Salary

- `SELECT DISTINCT(column_name) FROM table_name ORDER BY column_name DESC limit 2,1;`

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

## [4. Predicate in SQL](https://www3.navicat.com/en/company/aboutus/blog/1895-predicates-in-sql#)

- A predicate is simply an expression that evaluates to TRUE, FALSE, or UNKNOWN
- Used in the search condition of WHERE and HAVING clauses, the join conditions of FROM clauses, as well as any other part of a query where a boolean value is required.
- Comparison
- LIKE
- BETWEEN
- IN
- EXISTS
- IS NULL

## 5. SQL Constraints

Constraints in a database are rules applied to columns in a table to enforce data integrity and ensure the accuracy and reliability of the data within the database. They help maintain the consistency, validity, and integrity of the data by restricting the types of data that can be entered into a column. Here are the main types of constraints commonly used in relational databases:

### 1. **Primary Key Constraint**

- **Purpose**: Ensures that each row in the table is unique and not null.
- **Details**: A table can have only one primary key, which can be composed of one or more columns (composite key). Primary keys automatically create an index for faster query performance.
- **Example**:
  ```sql
  CREATE TABLE Employees (
      EmployeeID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50)
  );
  ```

### 2. **Foreign Key Constraint**

- **Purpose**: Establishes a relationship between two tables and ensures referential integrity.
- **Details**: A foreign key in one table points to a primary key in another table. This ensures that the value in the foreign key column must exist in the primary key column of the referenced table.
- **Example**:

  ```sql
  CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    EmployeeID INT,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
  );
  ```

  ```sql
  CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
  );
  ```

### 3. **Unique Constraint**

- **Purpose**: Ensures that all values in a column (or a combination of columns) are unique across the rows in the table.
- **Details**: Unlike primary keys, a table can have multiple unique constraints.
- **Example**:
  ```sql
  CREATE TABLE Customers (
      CustomerID INT PRIMARY KEY,
      Email VARCHAR(100) UNIQUE
  );
  ```

### 4. **Not Null Constraint**

- **Purpose**: Ensures that a column cannot have null values.
- **Details**: This constraint enforces that a column must always contain a value.
- **Example**:
  ```sql
  CREATE TABLE Products (
      ProductID INT PRIMARY KEY,
      ProductName VARCHAR(100) NOT NULL
  );
  ```

### 5. **Check Constraint**

- **Purpose**: Ensures that all values in a column satisfy a specific condition.
- **Details**: This constraint can be used to enforce domain integrity by limiting the values that can be stored in a column.
- **Example**:
  ```sql
  CREATE TABLE Employees (
      EmployeeID INT PRIMARY KEY,
      Age INT,
      CHECK (Age >= 18)
  );
  ```

### 6. **Default Constraint**

- **Purpose**: Provides a default value for a column when no value is specified.
- **Details**: This helps in maintaining uniformity and reducing null values in the table.
- **Example**:
  ```sql
  CREATE TABLE Orders (
      OrderID INT PRIMARY KEY,
      OrderDate DATE DEFAULT GETDATE()
  );
  ```

### Summary

- **Primary Key**: Unique identifier for each row.
- **Foreign Key**: Ensures referential integrity between tables.
- **Unique**: Ensures all values in a column or a set of columns are unique.
- **Not Null**: Ensures a column cannot have null values.
- **Check**: Ensures values in a column meet a specific condition.
- **Default**: Assigns a default value to a column when no value is provided.

Using these constraints appropriately ensures that the database remains consistent, accurate, and reliable by preventing invalid data from being entered into the tables.

## 6. Joins in SQL

- (INNER) JOIN: Returns records that have matching values in both tables
- LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
- RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
- FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

**Tables** - **_Products_** and **_Catogories_**

`Select productId, productName, catogoryName FROM products INNER JOIN Categories on `

## 7. [KeyWords](https://www.w3schools.com/sql/sql_ref_keywords.asp)

- Create, Create Table, Add, All, Alter, And, Drop, Distinct, Exists etc..

## 8. [Sql functions](https://www.w3schools.com/sql/sql_ref_mysql.asp)

- Numeric Functions, String Functions, Date, etc..

## SQL Questions

### 1. Indexing inSQL

- Database indexing is a technique used to improve the speed of data retrieval operations from a database table. It involves creating special data structures, known as indexes, that store a subset of the data in the table in a sorted order based on one or more columns.

- When you perform a query that involves the indexed column(s), the database engine can quickly locate the relevant rows by searching through the index instead of scanning the entire table. This significantly reduces the time it takes to fetch the requested data.

- Indexes are particularly useful for speeding up queries involving WHERE clauses, JOIN operations, and ORDER BY clauses. However, they come with a trade-off: while they improve read performance, they can slightly slow down write operations (such as INSERT, UPDATE, and DELETE), as the index needs to be updated whenever the underlying data changes.

- It's essential to carefully choose which columns to index based on the types of queries your application frequently performs. Over-indexing can lead to increased storage requirements and decreased performance on write operations, so it's important to strike a balance between read and write performance needs.

### 2. primary key vs foreign key

Primary keys and foreign keys are fundamental concepts in relational database design, each serving a specific purpose in maintaining the integrity and structure of the data.

#### Primary Key

1. **Uniqueness**: A primary key uniquely identifies each record in a table. No two rows can have the same primary key value.
2. **Non-nullability**: A primary key cannot contain NULL values. Every row must have a value for the primary key column(s).
3. **Single or Composite**: A primary key can be a single column or a combination of multiple columns (composite key).
4. **Indexing**: Most database systems automatically create an index on the primary key, which helps in fast data retrieval.
5. **Example**:
   ```sql
   CREATE TABLE Employees (
       EmployeeID INT PRIMARY KEY,
       FirstName VARCHAR(50),
       LastName VARCHAR(50)
   );
   ```
   Here, `EmployeeID` is the primary key for the `Employees` table.

#### Foreign Key

1. **Referential Integrity**: A foreign key is a column or a set of columns in one table that refers to the primary key in another table. It establishes a relationship between the two tables.
2. **Nullability**: Foreign keys can contain NULL values, depending on the design of the database.
3. **Enforcement**: Foreign keys enforce referential integrity by ensuring that the value in the foreign key column(s) matches a value in the primary key column(s) of the referenced table.
4. **Cascading Actions**: Foreign keys can be used to define cascading actions such as `ON DELETE CASCADE` or `ON UPDATE CASCADE`, which automatically propagate changes from the parent table to the child table.
5. **Example**:
   ```sql
   CREATE TABLE Orders (
       OrderID INT PRIMARY KEY,
       OrderDate DATE,
       EmployeeID INT,
       FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
   );
   ```
   Here, `EmployeeID` in the `Orders` table is a foreign key that references the `EmployeeID` in the `Employees` table.

#### Differences

1. **Purpose**:

   - A primary key uniquely identifies records within its own table.
   - A foreign key establishes a link between records in two tables.

2. **Uniqueness**:

   - A primary key value must be unique within its table.
   - A foreign key value can be duplicated across rows within its table.

3. **Nullability**:

   - A primary key cannot be NULL.
   - A foreign key can be NULL (unless the design specifies otherwise).

4. **Indexing**:
   - A primary key is automatically indexed.
   - A foreign key is not automatically indexed, though indexing foreign keys can improve performance for join operations.

#### Summary

- **Primary Key**: Ensures each row in a table is uniquely identifiable and is non-null.
- **Foreign Key**: Establishes a relationship between two tables, ensuring referential integrity by linking the foreign key in one table to the primary key in another table.

These keys are crucial for maintaining the relational structure and integrity of the data within a relational database.

### 3. stored procedure

A stored procedure is a precompiled collection of one or more SQL statements stored under a name and processed as a unit. They are stored in the database and can be executed by calling them with specific parameters, if needed. Stored procedures are used to encapsulate repetitive tasks, enforce business rules, and improve performance.

### Key Features and Benefits of Stored Procedures

1. **Precompiled Execution**: Stored procedures are compiled once and stored in the database. This can lead to significant performance improvements because the SQL statements do not need to be parsed and compiled each time they are executed.

2. **Reusability**: Stored procedures can be reused across different applications, reducing code duplication and maintenance efforts.

3. **Security**: They can enhance security by restricting direct access to the data. Users can be granted permission to execute the stored procedures without having direct access to the underlying tables.

4. **Maintainability**: Changes to business logic can be made in one place (the stored procedure) rather than in multiple application code locations.

5. **Modularity**: Stored procedures allow you to encapsulate and modularize your SQL code, making it easier to understand and maintain.

6. **Transaction Management**: They can include transaction control statements like BEGIN TRANSACTION, COMMIT, and ROLLBACK to ensure data integrity.

#### Creating and Using Stored Procedures

Here is an example of creating and using a stored procedure in SQL Server:

##### Example: Creating a Stored Procedure

Suppose we want to create a stored procedure that retrieves employee details based on the department.

```sql
CREATE PROCEDURE GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT EmployeeID, FirstName, LastName, JobTitle
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
```

##### Example: Executing a Stored Procedure

To execute the stored procedure and retrieve employees from department 5:

```sql
EXEC GetEmployeesByDepartment @DepartmentID = 5;
```

##### Example: Creating a Stored Procedure with Output Parameters

Stored procedures can also have output parameters. Here is an example:

```sql
CREATE PROCEDURE GetEmployeeCountByDepartment
    @DepartmentID INT,
    @EmployeeCount INT OUTPUT
AS
BEGIN
    SELECT @EmployeeCount = COUNT(*)
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
```

To execute this stored procedure and get the output:

```sql
DECLARE @Count INT;
EXEC GetEmployeeCountByDepartment @DepartmentID = 5, @EmployeeCount = @Count OUTPUT;
PRINT @Count;
```

#### Summary

- **Stored Procedure**: A precompiled collection of SQL statements stored in the database.
- **Benefits**: Precompiled execution, reusability, security, maintainability, modularity, and transaction management.
- **Creation**: Created using the `CREATE PROCEDURE` statement.
- **Execution**: Executed using the `EXEC` statement.
- **Parameters**: Can have input and output parameters.

Stored procedures are powerful tools in SQL that help streamline database operations, enforce consistency, and improve performance.

### 4. Write a query to fetch the employee whose age is greater than 40?

### 5. Describe Referential constraint?

### 6. Composite and Foreign Key

### 7. Normalization

Normalization is a database design technique used to minimize data redundancy and dependency by organizing fields and table relationships. The main objective is to divide a database into two or more tables and define relationships between the tables. It ensures that the data is stored efficiently without unnecessary duplication. Normalization typically involves several stages, known as normal forms (NFs), each with specific rules to achieve the desired level of data integrity.

#### Normal Forms

1. **First Normal Form (1NF)**: Ensures that the table is a flat table with no repeating groups or arrays. Each field contains only atomic (indivisible) values, and each record is unique.

   - **Requirements**:

     - Eliminate repeating groups in individual tables.
     - Create a separate table for each set of related data.
     - Identify each set of related data with a primary key.

   - **Example**:
     ```sql
     CREATE TABLE Employees (
         EmployeeID INT PRIMARY KEY,
         FirstName VARCHAR(50),
         LastName VARCHAR(50),
         ContactNumber VARCHAR(15)
     );
     ```

2. **Second Normal Form (2NF)**: Builds on 1NF and removes subsets of data that apply to multiple rows of a table and places them in separate tables. This stage ensures that all non-key attributes are fully functional dependent on the primary key.

   - **Requirements**:

     - Meet all requirements of 1NF.
     - Remove subsets of data that apply to multiple rows.
     - Ensure that all non-key attributes are fully dependent on the primary key.

   - **Example**:

     ```sql
     CREATE TABLE Departments (
         DepartmentID INT PRIMARY KEY,
         DepartmentName VARCHAR(50)
     );

     CREATE TABLE Employees (
         EmployeeID INT PRIMARY KEY,
         FirstName VARCHAR(50),
         LastName VARCHAR(50),
         DepartmentID INT,
         FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
     );
     ```

3. **Third Normal Form (3NF)**: Builds on 2NF and removes columns that are not dependent on the primary key. This form ensures that all the attributes are only dependent on the primary key.

   - **Requirements**:

     - Meet all requirements of 2NF.
     - Remove columns that are not dependent on the primary key.

   - **Example**:

     ```sql
     CREATE TABLE Employees (
         EmployeeID INT PRIMARY KEY,
         FirstName VARCHAR(50),
         LastName VARCHAR(50),
         DepartmentID INT,
         FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
     );

     CREATE TABLE DepartmentLocations (
         DepartmentID INT PRIMARY KEY,
         Location VARCHAR(50),
         FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
     );
     ```

4. **Boyce-Codd Normal Form (BCNF)**: A slight enhancement of 3NF. It deals with certain types of anomalies that are not handled by 3NF.

   - **Requirements**:

     - Meet all requirements of 3NF.
     - Every determinant must be a candidate key.

   - **Example**:
     ```sql
     CREATE TABLE ProjectAssignments (
         EmployeeID INT,
         ProjectID INT,
         AssignmentDate DATE,
         PRIMARY KEY (EmployeeID, ProjectID),
         FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
         FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
     );
     ```

5. **Fourth Normal Form (4NF)**: Ensures that there are no multi-valued dependencies.

   - **Requirements**:

     - Meet all requirements of BCNF.
     - A relation is in 4NF if it has no multi-valued dependencies.

   - **Example**:
     ```sql
     CREATE TABLE EmployeeSkills (
         EmployeeID INT,
         Skill VARCHAR(50),
         PRIMARY KEY (EmployeeID, Skill),
         FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
     );
     ```

6. **Fifth Normal Form (5NF)**: Ensures that there are no join dependencies and that all the information can be reconstructed from smaller pieces of the table.
   - **Requirements**:
     - Meet all requirements of 4NF.
     - A relation is in 5NF if it cannot be decomposed into any number of smaller tables without loss of data.

#### Summary of Benefits

- **Reduces Data Redundancy**: Minimizes duplicate data, saving storage space and improving data consistency.
- **Enhances Data Integrity**: Ensures that data dependencies are logical, which helps maintain accuracy and consistency.
- **Improves Query Performance**: By organizing data into well-structured tables, normalization can improve query performance.

Normalization is a crucial step in database design to ensure that the database remains efficient, scalable, and easy to maintain. Each normal form builds on the previous one, progressively reducing redundancy and improving data integrity.

### 8. What are the ways to reduce the load in database.

Reducing database load involves several strategies:

1. **Optimize Queries**: Ensure queries are efficient, utilize indexes, and avoid unnecessary operations.

2. **Database Indexing**: Proper indexing can speed up data retrieval significantly.

3. **Caching**: Implement caching mechanisms to store frequently accessed data in memory, reducing the need for repeated database queries.

4. **Database Sharding**: Distributing data across multiple database instances to spread the load.

5. **Load Balancing**: Distribute database requests across multiple servers to prevent overload on any single server.

6. **Vertical Scaling**: Increase the capacity of existing hardware, such as upgrading CPU, RAM, or storage.

7. **Horizontal Scaling**: Adding more servers to distribute the load, often used in conjunction with sharding.

8. **Data Archiving and Purging**: Regularly archive or purge old or unused data to reduce the size of the database.

9. **Optimize Data Model**: Design the database schema to minimize redundancy and normalize data where possible.

10. **Connection Pooling**: Reuse database connections rather than establishing new ones for each request.

Implementing a combination of these strategies can help alleviate database load and improve performance.

### 9. Primary Key vs Unique Key

Both primary keys and unique keys are used to enforce uniqueness in a database table, but they have distinct characteristics and purposes. Here's a detailed comparison between primary keys and unique keys:

#### Primary Key

1. Only one primary key per table.
2. **Uniqueness**: A primary key ensures that each row in the table has a unique identifier.
3. **Non-nullability**: A primary key column cannot contain NULL values.
4. **Number of Keys per Table**: Each table can have only one primary key.
5. **Indexing**: When a primary key is defined, the database automatically creates a unique index on the primary key column(s) for faster access.
6. **Purpose**: The primary key uniquely identifies each record in the table.
7. **Composite Keys**: A primary key can be composed of multiple columns (composite key).
8. **Example**:
   ```sql
   CREATE TABLE Employees (
       EmployeeID INT PRIMARY KEY,
       FirstName VARCHAR(50),
       LastName VARCHAR(50)
   );
   ```

#### Unique Key

1. **Uniqueness**: A unique key ensures that all values in the column(s) are unique across the table.
2. **Nullability**: A unique key column can contain one NULL value (though some databases may allow more than one).
3. **Number of Keys per Table**: A table can have multiple unique keys.
4. **Indexing**: When a unique key is defined, the database automatically creates a unique index on the unique key column(s) for faster access.
5. **Purpose**: Unique keys are used to enforce uniqueness for one or more columns, which may or may not be the primary identifier for the table.
6. **Composite Keys**: A unique key can also be composed of multiple columns (composite key).
7. **Example**:
   ```sql
   CREATE TABLE Employees (
       EmployeeID INT PRIMARY KEY,
       Email VARCHAR(100) UNIQUE
   );
   ```

#### Key Differences

1. **Purpose**:

   - **Primary Key**: Acts as the main identifier for records in the table.
   - **Unique Key**: Ensures that specific columns maintain unique values but is not necessarily the main identifier.

2. **Number of Keys per Table**:

   - **Primary Key**: Only one per table.
   - **Unique Key**: Multiple unique keys can be defined on a table.

3. **Null Values**:

   - **Primary Key**: Cannot contain NULL values.
   - **Unique Key**: Can contain NULL values (usually one NULL, but this can vary with database systems).

4. **Index Creation**:
   - Both primary and unique keys automatically create unique indexes, but their intent and application differ as described.

#### Usage Examples

**Primary Key Example**:

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);
```

In this example, `StudentID` is the primary key and uniquely identifies each student.

**Unique Key Example**:

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE,
    PhoneNumber VARCHAR(15) UNIQUE
);
```

In this example, `Email` and `PhoneNumber` are unique keys, ensuring that no two students can have the same email or phone number, but they are not the main identifiers for the table.

#### Summary

- **Primary Key**: Ensures each row is uniquely identifiable, cannot be NULL, and there can be only one per table.
- **Unique Key**: Ensures the uniqueness of values in specific columns, can be NULL (usually once), and multiple unique keys can be defined per table.

Understanding the differences and appropriate usage of primary keys and unique keys is crucial for database design and ensuring data integrity.
