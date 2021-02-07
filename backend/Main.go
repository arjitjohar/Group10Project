package main

import (
	"encoding/xml"
	"fmt"
)

//Header parts of xml file
const (
	Score = `<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">` + "\n"
)

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
	Number     int        `xml:"number,attr"`
	Attributes Attributes `xml:"attributes"`
	Notes      []Note     `xml:"note"`
}

//Attributes of the music piece (key, time, divisions and clef)
type Attributes struct {
	Key       Key     `xml:"key"`
	Time      Time    `xml:"time"`
	Divisions int     `xml:"divisions"`
	Clef      Clef    `xml:"clef"`
	Details   Details `xml:"staff-details"`
}

//Details of the tuning of the instrument
type Details struct {
	StaffLines int      `xml:"staff-lines"`
	Tuning     []Tuning `xml:"staff-tuning"`
}

//Tuning of the instrument at each line
type Tuning struct {
	LineNum      int    `xml:"line,attr"`
	TuningStep   string `xml:"tuning-step"`
	TuningOctave int    `xml:"tuning-ocatve"`
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
	music := &Music{
		Version: "3.1",
		Parts: []Part{
			Part{
				ID: "P1",
				Measures: []Measure{
					Measure{
						Number: 1,
						Attributes: Attributes{
							Divisions: 2,

							Key: Key{
								Fifths: 0,
							},

							Time: Time{
								Beats:    4,
								BeatType: 4,
							},

							Clef: Clef{
								Sign: "TAB",
								Line: 5,
							},

							//Tuning of the 6 lines of notes
							Details: Details{
								StaffLines: 6,
								Tuning: []Tuning{
									Tuning{
										LineNum:      1,
										TuningStep:   "E",
										TuningOctave: 2,
									},

									Tuning{
										LineNum:      2,
										TuningStep:   "A",
										TuningOctave: 2,
									},

									Tuning{
										LineNum:      3,
										TuningStep:   "D",
										TuningOctave: 3,
									},

									Tuning{
										LineNum:      4,
										TuningStep:   "G",
										TuningOctave: 3,
									},

									Tuning{
										LineNum:      5,
										TuningStep:   "B",
										TuningOctave: 3,
									},

									Tuning{
										LineNum:      6,
										TuningStep:   "E",
										TuningOctave: 4,
									},
								},
							},
						},

						/*TO IMPLEMENT ------------------ NOTES
						Notes: Note{

						}*/
					},
				},
			},
		},
	}

	/*note := &Note{
		Pitch: Pitch{
			Step:   "B",
			Octave: 2,
		},
		Duration: 8,
		Voice:    1,
		Type:     "Whole",
		Notations: Notations{
			Technical: Technical{
				String: 5,
				Fret:   2,
			},
		},
	}*/

	fmt.Printf(xml.Header)
	fmt.Printf(Score)
	out, err := xml.MarshalIndent(music, "", "   ")

	if err != nil {
		panic(err)
	}

	fmt.Println(string(out))

	/*//Reads file line-by-line
	noteList := make([]string, 0)         //Create a slice(Similar to dynamic array)
	noteNotation := make([]string, 0)     //Stores the note notations on standard staff
	noteNum := make([]int, 0)             //Stores the amount of notes per line
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
				noteNotation = append(noteNotation, noteList[j]) //NEED TO GET FIRST CHARACTER) //Stores note notation on staff
				re := regexp.MustCompile("[hps0-9]+")            //Regex of golang(search for characters h, p, s and numbers 0-9)
				//NOTENUM MAY NOT BE REQUIRED
				//noteNum = append(noteNum, re.FindAllStringIndex(noteList[j], -1))  //Counts the number of notes played on the current line
				//notePlayed = append(notePlayed, re.FindAllString(noteList[j], -1)) //Stores which are to be played in the current line
			}
		}
	}
	*/
}
