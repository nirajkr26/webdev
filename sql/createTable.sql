CREATE Table Teacher(
 --column_name datatype constraint
 id INT,
 name VARCHAR(30) NOT NULL,
 email VARCHAR(50) UNIQUE,
 age INT DEFAULT 18,
 subject VARCHAR(30) ,
 constraint subject_check check(subject in ('Maths','Science','English')),
);


constraints:

NOT NULL--column cannot be null
UNIQUE--column must be unique
default--column must have a default value
check--column must satisfy a condition