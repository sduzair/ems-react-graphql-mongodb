FROM mongo
COPY spring22-ems_DBDUMP/employees.json /employees.json
CMD ["mongod"]