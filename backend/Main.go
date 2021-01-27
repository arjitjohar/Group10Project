package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	//Read 6 lines
	/*var noteList [6]string
	i := 1
	for i <= 6 {
		fmt.Scan(&noteList[i]);
	}*/

	//Reads file line-by-line
	noteList := make([]string, 0)         //Create a slice(Similar to dynamic array)
	scanner := bufio.NewScanner(os.Stdin) //Scanner

	//Scans through lines inputted by user and stores them in a slice
	for scanner.Scan() {
		noteList = append(noteList, scanner.Text()) //Append scanned text to slice
		//fmt.Println(scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		fmt.Fprintln(os.Stderr, "reading standard input:", err)
	}

	//Reads through the slice line-by-line
	for i := 0; i < len(noteList); i++ {
		//Checks lines that contains dashes
		if strings.ContainsAny("-", noteList[i]) {
			//TODO: implement conversion into sheet music
		}
	}
}
