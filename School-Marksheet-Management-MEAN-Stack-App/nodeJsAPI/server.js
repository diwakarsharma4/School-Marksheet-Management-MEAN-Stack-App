const mongoose = require('mongoose');
var studentroutes = require('./routes/studentRoutes');
var teacherroutes = require('./routes/teacherRoutes');
var markshettroutes = require('./routes/marksheetRoutes');
const app = express();
const cors = require('cors');



app.listen(4000, function check(error){
    if(error){
        console.log("error starting server");
    }else{
        console.log("server started");
    }
});

//mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/SchoolDataBase', {
    useNewUrlParser: true, useUnifiedTopology: true
},).then(()=> console.log("conncted to db")).catch((error)=> {console.error(error);}) ;


app.use(express.json());
app.use(studentroutes);
app.use(teacherroutes);
app.use(markshettroutes);
