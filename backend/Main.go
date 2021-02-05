package main

// import the 2 modules we need
import (
	"bufio"
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
