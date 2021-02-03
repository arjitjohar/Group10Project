package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
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
	noteNotation := make([]string, 0)     //Stores the note notations on standard staff
	noteNum := make([]string, 0)          //Stores the amount of notes per line
	notePlayed := make([]string, 0)       //Stores the notes that are to be played
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
			for j := i; j < i+7; j++ {
				noteNotation = append(noteNotation, noteList[j])//NEED TO GET FIRST CHARACTER) //Stores note notation on staff
				re := regexp.MustCompile("[hps0-9]+")            //Regex of golang(search for characters h, p, s and numbers 0-9)
				//NOTENUM MAY NOT BE REQUIRED
				noteNum = append(noteNum, re.FindAllStringIndex(noteList[j], -1)  //Counts the number of notes played on the current line
				notePlayed = append(notePlayed, re.FindAllString(noteList[j], -1)) //Stores which are to be played in the current line
			}
		}
	}
}
