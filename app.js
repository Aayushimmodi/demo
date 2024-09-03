const express =  require('express');
const bodyParser =require('body-parser');
const connectDB =  require('./config/database');
connectDB();
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine','ejs');

const userRoutes =  require('./routes/userRoutes');
app.use('/users',userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});


// https://chatgpt.com/share/35bd74e1-3f38-4c0d-8066-1b84b49d870c
//Model handles data and database logic.
// View is responsible for what the user sees (UI).
// Controller processes incoming requests, handles business logic, and returns the appropriate response.