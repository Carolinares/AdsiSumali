const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./routes/router.js'));
app.use('/PagInicio',express.static(__dirname + './PagInicio/PROYECTO SUMALI'))

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});