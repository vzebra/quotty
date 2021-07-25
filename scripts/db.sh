#!/bin/bash


#
# accept command line argument and run
# corresponding script from the same dir
#
case $@ in

	"add")
		source ./add.sh
		;;
	
	"backup")
		source ./backup.sh
		;;

	"find")
		source ./find.sh
		;;

	"list")
		source ./list.sh
		;;
	
	"list inverse")
		source ./list.sh inverse
		;;

	"restore")
		source ./restore.sh
		;;

	"help")
		source ./help.sh
		;;

	*)
		source ./help.sh
		;;

esac

