--group rows that have the same values innto summary rows
--it collects data from multiple records and groups the resut by one or more column
--generally used with aggregate functions

SELECT name, age FROM teacher GROUP BY name;

SELECT * FROM teacher GROUP BY age;

select COUNT(id) from user GROUP BY age;