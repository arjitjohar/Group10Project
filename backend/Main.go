package main

import (
	"fmt"
	"strings"
	"text/scanner"
	"bufio"
	"os"
)

func main() {
	//Read 6 lines
	/*var noteList [6]string
	i := 1
	for i <= 6 {
		fmt.Scan(&noteList[i]);
	}*/

	//Reads file line-by-line
	i := 1
	var noteList [6]string //String arraylist of size 6
	scanner := bufio.NewScanner(os.Stdin) 
	for scanner.Scan() { //ERROR: error will probably occur if more than 6 lines are inputed - to fix
		noteList[i] = scanner.Text()
		i = i + 1
		//fmt.Println(scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		fmt.Fprintln(os.Stderr, "reading standard input:", err)
	}
}