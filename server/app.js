const http = require('http');
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

require('./child')

const app = express();
const router = express.Router()

// app.use(logger);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())   //prevent cors request err
app.use(helmet()) //armors our api against attacks

const port = parseInt(process.env.PORT, 10) || 8000;

// router.route('/')
app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});

