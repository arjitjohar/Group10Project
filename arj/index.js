const fs = require("fs");
const xml2js = require('xml2js');
var notes = [];

// read XML file
fs.readFile("music.xml", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }

    // convert XML data to JSON object
    xml2js.parseString(data, (err, result) => {
        if (err) {
            throw err;
        }

        
        // add a new database to list
        function notes()
        {
            notes.push("{notes: 'ad'}")
        }

        const notes = {
            note: [
                

            ]
        }


        result.databases.database.push(newNote);

        // convert SJON objec to XML
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(result);

        // write updated XML string to a file
        fs.writeFile('new-music.xml', xml, (err) => {
            if (err) {
                throw err;
            }

            console.log(`Updated XML is written to a new file.`);
        });

    });
});