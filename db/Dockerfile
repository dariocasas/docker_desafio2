FROM mysql:5.7

COPY ./createdb.sql /docker-entrypoint-initdb.d/

ENTRYPOINT ["docker-entrypoint.sh"]


