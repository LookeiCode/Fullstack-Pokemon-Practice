const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 8080;

app.use(bodyParser.json());


// Importing our routes in from the "routes" folder
app.use('/users', require('./routes/users'));




app.get('/', (req, res) => {
    res.send('hello world');
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


// PRISMA INSTALL DEBUGGING
// I ran into an issue installing Prisma - it kept giving me a 500 server error
// I'm not sure what fixed it, maybe it was their servers OR, I clicked the "debug" error in the package.json
// It worked after I did that so I'm not sure which of the two fixed it, but worth trying the "debug"


// LAUNCHING LOCALHOST IN BROWSER
// Make sure you do http:// - NOT https:// - (the "s" will mess it up) - (the s means its secured, localhost technically isn't secured)
// Also don't forget the colon (:) after "localhost" before you put your port number
// Example: http://localhost:8080

// UPDATING A TABLE NAME
// If you changed a table name and want to update it in the DB just re-run the migrate command (npx prisma migrate dev --name giveItAName)