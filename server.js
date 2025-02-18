require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.APP_PORT || 5000;

// Allow Cors
app.use(cors({
    origin: ["http://localhost:3000","http://127.0.0.1:3000"]
}));

// Allow json format
app.use(express.json());

// Allow form data
app.use(express.urlencoded({extended:true}));

// Db connection
const db = require('./app/models');
db.sequelize.sync({force: false}).then(()=>{
    console.log("DB Connected!");
});

// Routes
require('./app/routes/user.route')(app);

app.listen(PORT, () => console.log('Server is running ' + PORT));