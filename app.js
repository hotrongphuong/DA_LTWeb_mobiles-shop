const express = require('express');
const exphbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const db = require('./config/db');

const app = express();

// Set views engine
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');


app.use(express.static('public'));

app.use('/', indexRouter);

db.connect();


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sever running at port ${PORT}`);
})