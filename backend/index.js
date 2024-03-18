const express = require('express');
const app = express();
const cors = require('cors');

// importing db
const {connectDB} = require('./db');
connectDB()


// importing routes
const userRoutes = require('./routes/UserRoutes')


// middlewares
app.use(cors())
app.use(express.json())



// using routes
//userRouter
app.use('/api',userRoutes)



// listening to server
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})