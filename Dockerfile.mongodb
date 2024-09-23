FROM mongo
COPY spring22-ems_DBDUMP/employees.json ./employees.json
# RUN mkdir -p /docker-entrypoint-initdb.d
# COPY spring22-ems_DBDUMP/employees.json ./docker-entrypoint-initdb.d/employees.json
# COPY mongoimportscript.sh ./docker-entrypoint-initdb.d/mongoimportscript.sh
# WORKDIR /docker-entrypoint-initdb.d
# RUN chmod +x mongoimportscript.sh
# RUN mongoimportscript.sh
CMD ["mongod"]