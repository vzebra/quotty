#!/bin/bash

#
# Check for users.db to exist
#
if [[ ! -f "../data/users.db" ]]
then
    echo "Nothing to list (../data/users.db does not exist)"
    exit
fi

#
# Read users.db to array
#
readarray -t users_db < "../data/users.db"

#
# Set rownum conditionally
#
if [ $1 = "inverse" ]
then
    order=reverse
else
    order=strict
fi

#
# Measure array length
#
users_qty="${#users_db[@]}"

#
# Print out users.db records
#
for rownum in "${!users_db[@]}"
do
    if [ $order = "strict" ]
    then
        idx=rownum
    elif [ $order = "reverse" ]
    then
        idx=$(($users_qty-$rownum-1))
    fi
    echo "$(($idx+1)). ${users_db[idx]}"
done