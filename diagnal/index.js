
require('./config/config');


let express = require('express');
let app     = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

let scrapecontoller = require('./controllers/scrape.contoller');



app.use('/scrape', scrapecontoller);

  app.listen(process.env.PORT, () => {

    console.log(`Server started at port : ${process.env.PORT}`)
    

});