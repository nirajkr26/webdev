--to define some conditions

select * from teacher where age > 19;

select name from teacher where age BETWEEN 18 AND 22;

select * from teacher where email IN ('kumar@gmail.com','kumong@gmail.com');



-- operators:

-- arithmetic: +, -, *, /, %
-- comparison: =, <, >, <=, >=
-- logical: AND, OR, NOT,IN,BETWEEN,ALL,LIKE,ANY
-- Bitwise:&,|