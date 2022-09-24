FROM mongo
# WORKDIR /usr/src/mongodb
COPY spring22-ems_DBDUMP/employees.json ./employees.json
# COPY mongoimportscript.sh ./mongoimportscript.sh
RUN chmod 777 /employees.json
# RUN chmod 777 /docker-entrypoint-initdb.d/mongoimportscript.sh  
CMD ["mongod"]