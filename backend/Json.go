package main

// import the 2 modules we need

//json
type json struct {
	//Parts   []Part   `json:"part,omitempty"`
	//XMLName  xml.Name  `json:"part,omitempty"`
	ID string `json:"id,attr,omitempty"`
	//Measures []Measure `json:"measure,omitempty"`
	Number     int        `json:"number,attr,omitempty"`
	Attributes Attributes `json:"attributes,omitempty"`
	//Notes      []Note     `json:"note,omitempty"`
	Key        Key     `json:"key,omitempty"`
	Time       Time    `json:"time,omitempty"`
	Divisions  int     `json:"divisions,omitempty"`
	Clef       Clef    `json:"clef,omitempty"`
	Details    Details `json:"staff-details,omitempty"`
	StaffLines int     `json:"staff-lines,omitempty"`
	//Tuning     []Tuning `json:"staff-tuning,omitempty"`
	//LineNum      int    `json:"line,attr,omitempty"`
	TuningStep   string `json:"tuning-step,omitempty"`
	TuningOctave int    `json:"tuning-ocatve,omitempty"`
	Sign         string `json:"sign,omitempty"`
	Line         int    `json:"line,omitempty"`
	Fifths       int    `json:"fifths,omitempty"`
	Mode         string `json:"mode,omitempty"`
}
