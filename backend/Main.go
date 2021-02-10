package main

// import the 2 modules we need
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
}
