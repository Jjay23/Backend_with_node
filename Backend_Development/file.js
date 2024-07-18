const fs = require('fs');

fs.readFile('./blogs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());  // Changed from data.toString to data.toString()
    }
});


// Writting files


// read files


// delete files