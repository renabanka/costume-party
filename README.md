# costume-party

##SQL Commands
1. SQL Commands for creating database + user
2. Specific user in the db for that project! This is for security purposes!

```
create database costume_party;
create user 'l33tdba'@'localhost' identified by 'yellowpencil';
grant all privileges on costume_party.* to 'l33tdba'@'localhost';

```