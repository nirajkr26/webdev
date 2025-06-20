--alter-to change the schema

--add column

ALTER TABLE teacher ADD COLUMN salary INT;

ALTER TABLE teacher ADD COLUMN subject VARCHAR(30);

--drop column

ALTER TABLE teacher DROP COLUMN subject;

ALTER TABLE teacher DROP COLUMN salary;

--rename column

ALTER TABLE teacher RENAME COLUMN name TO first_name;

ALTER TABLE teacher RENAME COLUMN first_name TO name;

--change column data type

ALTER TABLE teacher CHANGE COLUMN age age INT;

--modify column constraint

ALTER TABLE teacher MODIFY COLUMN age INT NOT NULL;