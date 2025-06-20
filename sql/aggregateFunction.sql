-- aggregate functions perform calculations on a set of values and return a single value

-- count();
-- sum();
-- avg();
-- min();
-- max();

SELECT max(age) from teacher;

select COUNT(age) from teacher where age = 20;