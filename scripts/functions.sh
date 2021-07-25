#!/bin/bash

#
# Custom function to prompt for user input
# using dynamically passed strings and validates
# the input against custom pattern
#
# accepts following arguments:
#   $1 - invalid pattern;
#   $2 - prompt message;
#   $3 - invalid input message;
#
# returns:
#   $retval - validated user input
#

validate_prompt(){
    declare -A prompted_var=()
    while true
    do
        echo $2
        read entered_var
        if [[ $entered_var =~ $1 ]]
        then
            echo $3
        else
            break
        fi
    done
    retval=$entered_var
}

export -f validate_prompt

#
# Custom function to check for file existence,
# ask for permission to create one (if not exists)
# and append the line to that
#
# accepts following arguments:
#   $1 - string to be appended;
#   $2 - path to file (to be written);
#
append_line(){
    if [[ ! -f $2 ]]
    then
        while true
        do
            echo "File doesn't exist, should it be created? [Y/n]"
            read response
            response=$(sed 's/.*/\L&/g' <<< $response)
            if [ "$response" = "n" ]
            then
                echo "Creating new file is restricted"
                exit
            elif [ "$response" = "y" ] || [ "$response" = "" ]
            then
                touch $2
                chmod u+r $2
                break
            else
                echo "Please, choose either 'y' (yes, default) or 'n' (no)"
            fi
        done
    fi
    echo $1 >> $2
}
