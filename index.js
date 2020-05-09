const express =  require("express")
const app =  express()


const db    =  require('./config/db')
const colors =  require("colors")
const cors  = require("cors")
//load variables


//setup db connection
db()

//setup middleware
app.use(express.urlencoded(), express.json())
app.use(cors())

//setup routes

const  PORT =  procress.env.PORT  || 5000


app.listen(PORT, ()=>{
     console.log(`listening on PORT ${PORT}`.red)
    }
     )

