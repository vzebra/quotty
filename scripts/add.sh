#!/bin/bash

#
# source re-usable custom functions
#
source ./functions.sh

#
# prompt for username and validate input 
#
validate_prompt [^a-zA-Z] \
"Enter username (latin letters only):" \
"Invalid input (unexpected character), try again" \
>&2

username=$retval

#
# prompt for role and validate input
#
validate_prompt [^a-zA-Z] \
"Enter role (latin letters only):" \
"Invalid input (unexpected character), try again" \
>&2

role=$retval

#
# write user record to file
#
append_line "$username, $role" ../data/users.db

