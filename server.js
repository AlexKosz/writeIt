const express = require('express');
const cors = require('cors');
const cookies = require("cookie-parser");



const port = 8000;


const app = express();


app.use(cors({
    credentials: true, origin: 'http://localhost:3000'
}));


app.use(express.json());
app.use(cookies());



require('./server/config/mongoose');

require('./server/routes/routes')(app);



app.listen(port, () => {
    console.log("Listening at Port", port)
})