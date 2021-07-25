#!/bin/bash

#
# Search for backup files by template
#
backup_file=$(find ../data/*-users.db.backup 2>/dev/null | tail -1)

#
# Exit if no backup file exists
#
if [[ -z $backup_file ]]
then
    echo "No backup file found"
    exit
fi

#
# Copy backup file to users.db
#
cp $backup_file ../data/users.db
echo "../data/users.db restored from $backup_file"