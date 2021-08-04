I used sql3 for windows (installed .exe file).

sqlite> create table Name(two charvar(20), three smallint);

sqlite> insert into Name values('NAME', 'GRADES');

sqlite> insert into Name values('Michael Hungary', 98);

sqlite> insert into Name values('Ada Kolych',97);

sqlite> insert into Name values('Yuki Kiroga', 87);

sqlite> insert into Name values('Kito Yuuki', 100);

sqlite> select * from Names;

Error: no such table: Names

sqlite> select * from Name;

NAME|GRADES

Michael Hungary|98

Ada Kolych|97

Yuki Kiroga|87

Kito Yuuki|100

sqlite> .mode csv

sqlite> select * from Name;

NAME,GRADES

"Michael Hungary",98

"Ada Kolych",97

"Yuki Kiroga",87

"Kito Yuuki",100

sqlite> .import C:/Users/akhyd/Desktop/sqlite-tools-win32-x86-3360000/Naming.csv Name

sqlite> select * from Name;

NAME,GRADES

"Michael Hungary",98

"Ada Kolych",97

"Yuki Kiroga",87

"Kito Yuuki",100

Names,Grades

"Akuna Hitomi",90

"Michael Angel",83

"Sandra Komi",67
