package main

// import the 2 modules we need
import (
	"bufio"
	"encoding/xml"
	"fmt"
	"log"
	"os"
)

func main() {
	// // read in the contents of the localfile.data
	// data, err1 := ioutil.ReadFile("Somedata.txt")
	// // if our program was unable to read the file
	// // print out the reason why it can't
	// if err1 != nil {
	// 	fmt.Println(err1)
	// }

	// // if it was successful in reading the file then
	// // print out the contents as a string
	// fmt.Print(string(data))

	// err2 := ioutil.WriteFile("ReadData.txt", data, 0777)
	// // handle this error
	// if err2 != nil {
	// 	// print it out
	// 	fmt.Println(err2)
	// }

	// file, err := os.Open("Somedata.txt")
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer file.Close()

	// dataSlice := make([]string, 3)
	// fmt.Println("emp:", dataSlice)

	// scanner := bufio.NewScanner(file)
	// for scanner.Scan() {
	// 	fmt.Println(scanner.Text())
	// }

	// if err := scanner.Err(); err != nil {
	// 	log.Fatal(err)
	// }

	lines, err := readLines("Somedata.txt")
	if err != nil {
		log.Fatalf("readLines: %s", err)
	}
	for i, line := range lines {
		fmt.Println(i, line)
	}

	if err := writeLines(lines, "foo.out.txt"); err != nil {
		log.Fatalf("writeLines: %s", err)
	}

	fmt.Println(lines[3])
	fmt.Println(lines[3][4])
	fmt.Printf(string(lines[3][4])) // means print charact 0 of line 2 in lines

}

// readLines reads a whole file into memory
// and returns a slice of its lines.
func readLines(path string) ([]string, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var lines []string
	scanner := bufio.NewScanner(file)
//Music information for MusicXML file
type Music struct {
	XMLName xml.Name `xml:"score-partwise"`
	Parts   []Part   `xml:"part"`
}

//Part in the music piece
type Part struct {
	//Id       string    `xml:"id,attr"`
	Measures []Measure `xml:"measure"`
}

//Measure in the music piece
type Measure struct {
	Number int        `xml:"number,attr"`
	Atters Attributes `xml:"attributes"`
	Notes  []Note     `xml:"note"`
}

//Attributes of the music piece (key, time, divisions and clef)
type Attributes struct {
	Key       Key  `xml:"key"`
	Time      Time `xml:"time"`
	Divisions int  `xml:"divisions"`
	Clef      Clef `xml:"clef"`
}

//Clef of the music part
type Clef struct {
	Sign string `xml:"sign"`
	Line int    `xml:"line"`
}

//Key signature of the music part
type Key struct {
	Fifths int    `xml:"fifths"`
	Mode   string `xml:"mode"`
}

//Time Beat in the music piece
type Time struct {
	Beats    int `xml:"beats"`
	BeatType int `xml:"beat-type"`
}

//Note in the music piece
type Note struct {
	Pitch    Pitch    `xml:"pitch"`
	Duration int      `xml:"duration"`
	Voice    int      `xml:"voice"`
	Type     string   `xml:"type"`
	Rest     xml.Name `xml:"rest"`
	Chord    xml.Name `xml:"chord"`
}

//Pitch of the music piece
type Pitch struct {
	Accidental int8   `xml:"alter"`
	Step       string `xml:"step"`
	Octave     int    `xml:"octave"`
}

func main() {
	//Reads file line-by-line
	noteList := make([]string, 0)         //Create a slice(Similar to dynamic array)
	noteNotation := make([]string, 0)     //Stores the note notations on standard staff
	noteNum := make([]int, 0)             //Stores the amount of notes per line
	notePlayed := make([]string, 0)       //Stores the notes that are to be played
	scanner := bufio.NewScanner(os.Stdin) //Scanner

	//Scans through lines inputted by user and stores them in a slice
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	return lines, scanner.Err()
}

// writeLines writes the lines to the given file.
func writeLines(lines []string, path string) error {
	file, err := os.Create(path)
	if err != nil {
		return err
	}
	defer file.Close()

	w := bufio.NewWriter(file)
	for _, line := range lines {
		fmt.Fprintln(w, line)
	}
	return w.Flush()
	//Reads through the slice line-by-line
	for i := 0; i < len(noteList); i++ {
		//Checks lines that contains dashes
		if strings.ContainsAny("-", noteList[i]) {
			//TODO: implement conversion into sheet music
			for j := i; j < i+7; j++ {
				noteNotation = append(noteNotation, noteList[j]) //NEED TO GET FIRST CHARACTER) //Stores note notation on staff
				re := regexp.MustCompile("[hps0-9]+")            //Regex of golang(search for characters h, p, s and numbers 0-9)
				//NOTENUM MAY NOT BE REQUIRED
				//noteNum = append(noteNum, re.FindAllStringIndex(noteList[j], -1))  //Counts the number of notes played on the current line
				//notePlayed = append(notePlayed, re.FindAllString(noteList[j], -1)) //Stores which are to be played in the current line
			}
		}
	}

}
