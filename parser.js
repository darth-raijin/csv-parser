/*
 * @author Mohamed Macow | https://github.com/macow-lab/csv-parser
 */

let fs = require("fs")
// csv-parse used for handling the file. 
let parser = require('csv-parser')

/**
 * Method is used for parsing CSV files to JSON
 * @param {String} csv - Name of CSV file to be converted to JSON
 * @param {String} delimiter - To make the program more flexible, the delimiter can be set
 * @return {JSON}
 */
exports.csvToJSON = function csvParser(csv) {
    /*
     * If-statement is used to validate the file format, as handling of CSV might differ. If format is wrong, method will return an error
     */

    if (csv.split(".").pop() !== "csv") {
        return console.error("Inserted file is wrong format:" + csv);
    }

    // Try-catch is used to prevent server crashes and impose proper handling of errors
    try {
        /*
        * Performance wise, the stream is incredibly good compared with reading the whole file. 
        * As elements are passed in the stream, they will be added and removed from the memory
        */
        fs.createReadStream(csv)
            .pipe(parser())
            .on('data', (row) => {
                console.log(row)
            })
            .on()
    } catch (error) {
    console.log(error)
    } 
}

