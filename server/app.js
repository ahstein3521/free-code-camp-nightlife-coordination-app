const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const app = express();
const passport=require('passport');
const session=require('express-session')
const mongoose = require('mongoose');

require('./secret');

mongoose.connect(process.env.MONGO_URI);

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({extended:false}));


require('./routes/search')(app)
require('./routes/auth')(app)




const port = process.env.PORT || 3000;
app.listen(port);



console.log('Server listening on:', port);