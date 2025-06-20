--having clause is used to filter result after group by is applied

--where is for the table,having is for a group
--group by is necessary for having

SELECT name, age FROM teacher GROUP BY age HAVING age > 20;