show databases;

select user, host from mysql.user;
commit;
CREATE USER 'sarath'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';
GRANT ALL PRIVILEGES ON *.* TO 'sarath'@'192.168.137.1';
flush privileges;  -- restart once done

	Login into, sarath'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';


CREATE USER 'sarath'@'LAPTOP-PIF99MN2' IDENTIFIED BY 'sarath69kumar';
GRANT ALL PRIVILEGES ON simple_DB.* TO 'sarath'@'LAPTOP-PIF99MN2';
flush privileges;  -- restart once done


https://www.databasejournal.com/features/mysql/article.php/3904531/The-10-Most-Common-MySQL-Queries.htm















show databases;
select user, host from mysql.user;
DROP USER 'sarathmi'@'LAPTOP-PIF99MN2';
CREATE USER 'sarath'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';
GRANT ALL PRIVILEGES ON simple_web_app.* TO 'sarath'@'192.168.137.1';

flush privileges;
SHOW GRANTS FOR 'sarath'@'192.168.137.1';

DROP USER 'sarath'@'LAPTOP-PIF99MN2';
CREATE USER 'sarathmi'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';
UPDATE mysql.user SET Host='LAPTOP-PIF99MN2' WHERE Host='192.168.137.1' AND User= 'sarath';


use simple_web_app;



CREATE USER 'sarath'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';

show databases;
select user, host from mysql.user;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'sarathsqlpassword';

commit;
CREATE USER 'sarath'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';
SHOW GRANTS FOR 'sarath'@'192.168.137.1';

DROP USER 'sarathMI'@'LAPTOP-PIF99MN2';
CREATE USER 'sarathMI'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';
UPDATE mysql.user SET Host='LAPTOP-PIF99MN2' WHERE Host='192.168.137.4' AND User= 'sarathMI';
REVOKE ALL, GRANT OPTION FROM sarathMI@192.168.137.4;
GRANT ALL PRIVILEGES ON *.* TO 'sarathMI'@'LAPTOP-PIF99MN2';

flush privileges;
SHOW GRANTS FOR 'root'@'localhost';
SHOW GRANTS FOR 'sarathMI'@'LAPTOP-PIF99MN2';

DROP USER 'sarath'@'192.168.137.1';