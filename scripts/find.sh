#!/bin/bash

#
# prompt for username to look up for
#
echo "Enter username to look up for:"
read username

#
# leverage GNU grep to find match
#
matches=()
readarray matches < <(grep -i "^$username," ../data/users.db)

#
# exit if no matches were found
#
if [ ${#matches[@]} -eq 0 ]
then
    echo "User not found"
    exit
fi

#
# print out the matches otherwise
#
echo "Following matches were found:"
for match in "${matches[@]}"
do
    echo $match
done