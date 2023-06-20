# SQL Ques
## 1. Find max and second max salary for a employee table MySQL
- Try this, n would be the nth item you would want to return
- https://stackoverflow.com/a/21520159/11962586
- ```SELECT DISTINCT(Salary) FROM table ORDER BY Salary DESC LIMIT n,1```

In your case
- ```SELECT DISTINCT(column_name) FROM table_name ORDER BY column_name DESC limit 2,1;```

## 2. Types of Relationship in DBMS
- One to One relationship
- ![img_2.png](img_2.png)
- One to many or many to one relationship
- ![img_3.png](img_3.png)
- ![img_4.png](img_4.png)
- Many to many relationships
- ![img_5.png](img_5.png)
- https://www.javatpoint.com/types-of-relationship-in-database-table