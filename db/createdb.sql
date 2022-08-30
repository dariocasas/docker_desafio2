use mysqldb;

create table if not exists user(
    id int auto_increment primary key,
    username varchar(255)
) ENGINE=INNODB;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

