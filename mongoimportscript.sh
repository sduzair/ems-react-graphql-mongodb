#!/bin/sh

mongoimport --host localhost --db spring22-ems --collection employees --drop --file /employees.json
# rm -rf employees.json