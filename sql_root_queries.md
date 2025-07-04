# MySQL User Management & Privileges Cheat Sheet

---

<details>
<summary><strong>1. Show Existing Databases and Users</strong></summary>

```sql
-- Show all databases on the MySQL server
SHOW DATABASES;

-- Show all users and their host info
SELECT user, host FROM mysql.user;
```

Use these commands to get an overview of your MySQL environment.

</details>

---

<details>
<summary><strong>2. Create a New User</strong></summary>

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

* `'username'` — the MySQL user to create.
* `'host'` — from which IP or hostname the user is allowed to connect. Use `%` for any host, or specific IP like `'192.168.1.100'`.
* `'password'` — password for the user.

**Example:**

```sql
CREATE USER 'sarath'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';
```

This creates user `sarath` allowed to connect only from `192.168.137.1`.

</details>

---

<details>
<summary><strong>3. Grant Privileges</strong></summary>

```sql
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'host';
```

* Grants all privileges on a specific database.
* Use `*.*` to grant on all databases (be cautious).

**Examples:**

```sql
-- Grant all privileges on all DBs
GRANT ALL PRIVILEGES ON *.* TO 'sarath'@'192.168.137.1';

-- Grant all privileges on specific DB
GRANT ALL PRIVILEGES ON simple_DB.* TO 'sarath'@'LAPTOP-PIF99MN2';
```

After granting privileges, always run:

```sql
FLUSH PRIVILEGES;
```

to reload privilege tables.

</details>

---

<details>
<summary><strong>4. Show User Grants</strong></summary>

```sql
SHOW GRANTS FOR 'username'@'host';
```

Use this to verify what privileges a user has.

**Example:**

```sql
SHOW GRANTS FOR 'sarath'@'192.168.137.1';
```

</details>

---

<details>
<summary><strong>5. Drop/Delete a User</strong></summary>

```sql
DROP USER 'username'@'host';
```

**Example:**

```sql
DROP USER 'sarath'@'LAPTOP-PIF99MN2';
```

Deletes the user completely.

</details>

---

<details>
<summary><strong>6. Update User Host</strong></summary>

MySQL doesn't allow updating host in `CREATE USER`, so to change a host you can:

* Drop the existing user and recreate with new host, **OR**
* Update the `mysql.user` table manually (advanced and risky, requires `FLUSH PRIVILEGES`):

```sql
UPDATE mysql.user 
SET Host = 'LAPTOP-PIF99MN2' 
WHERE Host = '192.168.137.1' AND User = 'sarath';
FLUSH PRIVILEGES;
```

**Note:** This is not the recommended way; dropping and recreating users is safer.

</details>

---

<details>
<summary><strong>7. Commit and Reload Privileges</strong></summary>

* MySQL auto-commits DDL commands like `CREATE USER` and `GRANT`.
* You do **not** need to explicitly run `COMMIT;` for these commands.
* Use `FLUSH PRIVILEGES;` to reload grant tables **only if** you manually modify `mysql.user` table.

---

**Example:**

```sql
FLUSH PRIVILEGES;
```

</details>

---

<details>
<summary><strong>8. Login Using Created User</strong></summary>

To login as a created user:

```bash
mysql -u sarath -p -h 192.168.137.1
```

You will be prompted for the password.

---

Alternatively, in SQL client:

```sql
-- Login not done inside MySQL shell, but via client or terminal
-- No SQL command: use CLI or connection strings with these credentials.
```

</details>

---

### Summary example workflow to create and grant user privileges:

```sql
CREATE USER 'sarath'@'192.168.137.1' IDENTIFIED BY 'sarath69kumar';
GRANT ALL PRIVILEGES ON simple_web_app.* TO 'sarath'@'192.168.137.1';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'sarath'@'192.168.137.1';
```

---

If you want, I can help create a full example with scripts or detailed steps to setup MySQL users securely!
