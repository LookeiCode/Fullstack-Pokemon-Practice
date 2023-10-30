const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());



d




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


// PRISMA INSTALL DEBUGGING
// I ran into an issue installing Prisma - it kept giving me a 500 server error
// I'm not sure what fixed it, maybe it was their servers OR, I clicked the "debug" error in the package.json
// It worked after I did that so I'm not sure which of the two fixed it, but worth trying the "debug"