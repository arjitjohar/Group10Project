package main

// import the 2 modules we need
import (
	"bufio"
	"encoding/xml"
	"fmt"
	"os"
)

/*func main() {

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

}*/

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
}

//Music Information for MusicXML file
type Music struct {
	XMLName xml.Name `xml:"score-partwise"`
	Version string   `xml:"version,attr"`
	Parts   []Part   `xml:"part"`
}

//Part in the music piece
type Part struct {
	XMLName  xml.Name  `xml:"part"`
	ID       string    `xml:"id,attr"`
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

//Time in the attributes
type Time struct {
	Beats    int `xml:"beats"`
	BeatType int `xml:"beat-type"`
}

//Note in the measure
type Note struct {
	Pitch     Pitch     `xml:"pitch"`
	Duration  int       `xml:"duration"`
	Voice     int       `xml:"voice"`
	Type      string    `xml:"type"`
	Notations Notations `xml:"notations"`
}

//Pitch of Notes
type Pitch struct {
	Step   string `xml:"step"`
	Alter  int    `xml:"alter"`
	Octave int    `xml:"octave"`
}

//Notations of Note
type Notations struct {
	Technical Technical `xml:"technical"`
}

//Technical of notation
type Technical struct {
	String int `xml:"string"`
	Fret   int `xml:"fret"`
}

func main() {

	//x:= 1
	y := 2
	b := [5]int{1, 2, 3, 4, 5}
	for i := 0; i < 5; i++ {

	
	
	note := &Note{
		Pitch: Pitch{
			Step:   "B",
			Octave: 2,
		},
		Duration: 8,
		Voice:    1,
		Type:     "Whole",
		Notations: Notations{
			Technical: Technical{
				String: b[3],
				Fret:   y,
			},
		},
	}

	out, err := xml.MarshalIndent(note, "", "   ")

	if err != nil {
		panic(err)
	}

	fmt.Println(string(out))
}	
}
