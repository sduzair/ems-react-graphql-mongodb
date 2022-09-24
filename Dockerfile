FROM mongo
COPY spring22-ems_DBDUMP/employees.json /employees.json
RUN chmod 777 /employees.json
RUN chmod 777 /mongoimportscript.sh  
CMD ["mongod"]