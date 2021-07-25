#!/bin/bash

today=$(date '+%Y-%m-%d')

if [[ ! -f ../data/users.db ]]
then
    echo "Nothing to backup (file ../data/users.db does not exist)"
    exit
fi

cp ../data/users.db ../data/$today-users.db.backup

echo "Backup copy of ../data/users.db is created"
