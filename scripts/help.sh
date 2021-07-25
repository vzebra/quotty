#!/bin/bash

cat << EOF
User database management script

Usage: 
    ./db.sh [ACTION]

Following actions are supported:
    add - append user record to user.db file;
    backup - backup user.db file;
    find - find the record in user.db file;
    list - print the contents of user.db file;
    list inverse - print the contents of user.db file in reverse order;
    restore - restore backup copy of user.db file;
    help - prints out this help message;

Example:
    ./db.sh list
EOF